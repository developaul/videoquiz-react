import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { useStyles } from './Entry.css';

export const Entry = ({ id, question }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleRedirect = () => history.push(`/video-quiz/${id}`);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/live-from-space.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography align="center" variant="body2" color="textSecondary" component="p">
            {question}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <IconButton
          color="primary"
          onClick={handleRedirect}
        >
          <PlayArrowIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

Entry.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
}
