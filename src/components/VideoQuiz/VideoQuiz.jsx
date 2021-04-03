import { useDispatch } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CachedIcon from '@material-ui/icons/Cached';
import StopIcon from '@material-ui/icons/Stop';

import { useVideo } from '../../hooks/useVideo';
import { startUpdateVideoQuiz, startDeleteVideoQuiz } from '../../actions/VideoQuizAction';

import { useStyles } from './VideoQuiz.css';
import { useSnackbar } from 'notistack';

export const VideoQuiz = ({ id, question, url }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const errorPermiss = () => enqueueSnackbar('Para poder responder la pregunta, necesitas dar permisos de camara y audio', { variant: 'error' });

  const saveVideo = url => dispatch(startUpdateVideoQuiz({ id, url, question }));

  const deleteVideo = () => dispatch(startDeleteVideoQuiz(id));

  const {
    isRecording,
    userVideoRef,
    startRecording,
    stopRecording
  } = useVideo({
    isRecording: false,
  }, saveVideo, errorPermiss);

  return (
    <Card className={classes.root}>
      {(url) ?
        (
          <>
            <CardMedia
              title="Contemplative Reptile"
              component="video"
              src={url}
              controls
            />
          </>
        )
        :
        (
          <CardMedia
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
          ((url) ?
            (
              <IconButton
                color="primary"
                className={classes.retryAction}
                onClick={deleteVideo}
              >
                <CachedIcon fontSize="large" />
              </IconButton>
            )
            :
            (
              <IconButton
                color="primary"
                className={classes.firstAction}
                onClick={startRecording}
              >
                <PlayArrowIcon fontSize="large" />
              </IconButton>
            )

          )
        }
        {(isRecording) &&
          (
            <div className={classes.feedback}>
              <Typography>Rec</Typography>
              <FiberManualRecordIcon fontSize="large" />
            </div>
          )
        }
      </CardActions>
    </Card>
  )
}
