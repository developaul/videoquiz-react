import { useDispatch } from 'react-redux';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import CachedIcon from '@material-ui/icons/Cached';
import StopIcon from '@material-ui/icons/Stop';

import { useVideo } from '../../hooks/useVideo';
import { startUpdateVideoQuiz } from '../../actions/VideoQuizAction';

import { useStyles } from './VideoQuiz.css';
import { useSnackbar } from 'notistack';

export const VideoQuiz = ({ id, question, url }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();


  const errorPermiss = () => enqueueSnackbar('Para poder responder la pregunta, necesitas dar permisos de camara y audio', { variant: 'error' });

  const {
    isRecording,
    // videoUrl,
    userVideoRef,
    startRecording,
    stopRecording
  } = useVideo({
    isRecording: false,
    // url
  }, saveVideo, errorPermiss);


  function saveVideo(url) {
    const videoQuiz = {
      id,
      url,
      question
    }

    dispatch(startUpdateVideoQuiz(videoQuiz));

  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {(url) ?
          (
            <CardMedia
              className={classes.media}
              title="Contemplative Reptile"
              component="video"
              // ref={userVideoRef}
              controls
              // playsInline
              src={url}
            />
          )
          :
          (
            <CardMedia
              className={classes.media}
              title="Contemplative Reptile"
              component="video"
              ref={userVideoRef}
              playsInline
              poster="../assets/images/videonotfound.png"
            />
          )

        }
        <CardContent>
          <Typography align="center" variant="body2" color="textSecondary" component="p">
            {question}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {(isRecording)
          ? (
            <IconButton
              color="primary"
              className={classes.firstAction}
              onClick={stopRecording}
            >
              <StopIcon fontSize="large" />
            </IconButton>
          )
          :
          ((!url) &&
            <IconButton
              color="primary"
              className={classes.firstAction}
              onClick={startRecording}
            >
              <PlayArrowIcon fontSize="large" />
            </IconButton>
          )
        }
        {(isRecording) &&
          (
            <div className={classes.feedback}>
              <Typography>1:30 / 2:00</Typography>
              <FiberManualRecordIcon fontSize="large" />
            </div>
          )
        }
      </CardActions>
    </Card>
  )
}
