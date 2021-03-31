import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    minWidth: 245,
    position: 'relative',
  },
  media: {
    height: 708,
  },
  firstAction: {
    position: 'absolute',
    left: '4px',
    bottom: '66px'
  },
  feedback: {
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
    right: '20px',
    top: '20px'
  }
}, { name: 'VideoQuiz' });