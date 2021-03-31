import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {
  HomeScreen,
  VideoQuizScreen
} from '../pages';

export const AppRouter = () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/video-quiz/:videoId" exact component={VideoQuizScreen} />
        <Redirect to="/" />
      </Switch>
    </>
  </Router>
);