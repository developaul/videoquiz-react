import PropTypes from 'prop-types';

import { Entry } from '../Entry';

import { useStyles } from './Entries.css';

export const Entries = ({ videosQuizzes }) => {
  const classes = useStyles();
  return (
    <main className={classes.entries}>
      {
        videosQuizzes?.map((videoQuiz) => (
          <Entry
            key={videoQuiz.id}
            {...videoQuiz}
          />
        ))
      }
    </main>
  )
}

Entries.propTypes = {
  videosQuizzes: PropTypes.array.isRequired
}