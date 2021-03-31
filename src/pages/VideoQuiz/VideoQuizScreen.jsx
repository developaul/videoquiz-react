import { useMemo } from "react";
import { useSelector } from 'react-redux';
import {
  Redirect
} from 'react-router-dom';
import { Container, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { getVideoQuizById } from "../../helpers";
import { VideoQuiz } from '../../components/VideoQuiz';

import { useStyles } from './VideoQuizScreen.css';

export function VideoQuizScreen({ match, history }) {
  const classes = useStyles();
  const { videosQuizzes } = useSelector(s => s.videoQuiz);

  const videoId = Number(match.params.videoId);
  const videoQuiz = useMemo(() => getVideoQuizById(videoId, videosQuizzes), [videoId, videosQuizzes]);
  if (!videoQuiz) return <Redirect to="/" />

  const { id } = videoQuiz;
  const goToHome = () => history.push(`/`);
  const goToNextPage = () => (id < videosQuizzes.length) && history.push(`/video-quiz/${id + 1}`);
  const goToPrevPage = () => (id > 1) && history.push(`/video-quiz/${id - 1}`);

  return (
    <Container maxWidth="xl">
      <div className={classes.goBackContainer}>
        <Button
          variant="contained"
          color="default"
          startIcon={<ArrowBackIcon />}
          onClick={goToHome}
        >
          Volver
        </Button>
      </div>
      <VideoQuiz
        {...videoQuiz}
      />
      <div className={classes.actionsContainer}>
        <Button
          variant="contained"
          color="default"
          startIcon={<ArrowBackIosIcon />}
          onClick={goToPrevPage}
          disabled={(id === 1)}
        >
          Atras
        </Button>
        <Button
          variant="contained"
          color="default"
          endIcon={<ArrowForwardIosIcon />}
          onClick={goToNextPage}
          disabled={(id === videosQuizzes.length)}
        >
          Siguiente
        </Button>
      </div>
    </Container>
  )
}