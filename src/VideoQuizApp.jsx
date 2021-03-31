import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core';
import { Slide } from '@material-ui/core';

import { AppRouter } from './routers';

import { theme } from './themes';
import { store } from './store';

const VideoQuizApp = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          preventDuplicate
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          TransitionComponent={Slide}
        >
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default VideoQuizApp;