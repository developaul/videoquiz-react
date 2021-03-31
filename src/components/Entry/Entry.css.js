import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    minWidth: 245,
    position: 'relative',
  },
  media: {
    height: 340,
  },
  actions: {
    position: 'absolute',
    left: '4px',
    bottom: '76px'
  }
}, { name: 'Entry' });