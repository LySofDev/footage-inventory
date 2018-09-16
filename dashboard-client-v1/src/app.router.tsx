import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { AppLayout } from './app.layout';
import { default as history } from './history';
import { default as Home } from './home';
import { Videos } from './videos';
import { Clips } from './clips';
import { default as store } from './store';

const HomePage = () => (<Home />);
const VideosPage = () => (<Videos />);
const ClipsPage = () => (<Clips />);

export class AppRouter extends React.PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <AppLayout>
            <Route path="/" exact={true} render={HomePage} />
            <Route path="/dashboard" render={VideosPage} />
            <Route path="/videos" render={VideosPage} />
            <Route path="/clips" render={ClipsPage} />
          </AppLayout>
        </Router>
      </Provider>
    );
  }
}
