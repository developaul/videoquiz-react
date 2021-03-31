import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  entries: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax( 245px, 1fr ))',
    gridGap: '1rem',
    margin: '2rem 0'
  },
}, { name: 'Entries' });