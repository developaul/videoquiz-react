import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import { AppRouter } from './routers';

import { theme } from './themes';
import { store } from './store';

const VideoQuizApp = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default VideoQuizApp;