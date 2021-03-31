import { useState, useEffect, useRef } from 'react';

export const useVideo = (initialState, fn) => {
  const [{ isRecording, url }, setRecordingStatus] = useState(initialState);
  const [{ stream, mediaRecorder }, setVideoController] = useState({
    stream: null,
    mediaRecorder: null
  });

  const userVideoRef = useRef(null);
  const chunksRef = useRef([]); // TODO: FIX THIS

  useEffect(() => {

    (async () => {

      const { stream, mediaRecorder } = await initCamera();
      setVideoController({
        stream,
        mediaRecorder
      });

    })();

  }, []);

  const initCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    if (userVideoRef.current) {
      userVideoRef.current.srcObject = stream;
      userVideoRef.current.muted = true;
      userVideoRef.current.play();
    }

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
    }

    return {
      stream,
      mediaRecorder
    }

  }

  const startRecording = async () => {
    let media = mediaRecorder;
    if (!(userVideoRef.current && userVideoRef.current.srcObject)) {
      const { mediaRecorder: m, stream: s } = await initCamera();
      media = m;
      setVideoController({ mediaRecorder: m, stream: s });
    }
    if (media) {
      media.start(1000);

      setRecordingStatus(s => ({
        ...s,
        isRecording: true
      }));
    }
  }

  const stopRecording = async () => {
    if (!mediaRecorder || !stream) return;
    mediaRecorder.stop();
    mediaRecorder.onstop = () => {
      try {
        const blob = new Blob(chunksRef.current, { type: chunksRef.current[0].type });
        const url = URL.createObjectURL(blob);
        if (userVideoRef.current) {

          if (!stream) return;
          let tracks = stream.getTracks();

          tracks.forEach(function (track) {
            track.stop();
          });


          userVideoRef.current.srcObject = null;
          chunksRef.current = [];
          setRecordingStatus({
            url,
            isRecording: false
          });

          // setVideoController({
          //   stream: null,
          //   mediaRecorder: null
          // })

          fn(url);
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return {
    isRecording,
    videoUrl: url,
    userVideoRef,
    startRecording,
    stopRecording,
  }

}
