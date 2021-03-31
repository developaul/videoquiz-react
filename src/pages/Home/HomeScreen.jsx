import { useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

import { Entries } from '../../components/Entries';

import { useStyles } from './HomeScreen.css';

export const HomeScreen = () => {
  const classes = useStyles();
  const { videosQuizzes } = useSelector(s => s.videoQuiz);
  return (
    <Container
      maxWidth="xl"
      className={classes.container}
    >
      <Typography
        align="center"
        variant="h1"
        component="h1"
      >
        Video Cuestionario
      </Typography>

      <Entries
        videosQuizzes={videosQuizzes}
      />
    </Container>
  )
}