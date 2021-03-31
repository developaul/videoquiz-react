import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    minWidth: 245,
    position: 'relative',
  },
  media: {
    // height: 708,
  },
  firstAction: {
    position: 'absolute',
    left: '14px',
    bottom: '84px'
  },
  retryAction: {
    position: 'absolute',
    right: '20px',
    top: '20px'
  },
  feedback: {
    alignItems: 'center',
    display: 'flex',
    color: 'red',
    position: 'absolute',
    right: '20px',
    top: '20px'
  }
}, { name: 'VideoQuiz' });