import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { AppLayout } from './app.layout';
import { default as history } from './history';
import { default as Home } from './home';
import { Videos } from './videos';
import { default as store } from './store';

const HomeComponent = () => (<Home />);
const VideosComponent = () => (<Videos />);

export class AppRouter extends React.PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <AppLayout>
            <Route path="/" exact={true} render={HomeComponent} />
            <Route path="/dashboard" render={VideosComponent} />
            <Route path="/videos" render={VideosComponent} />
          </AppLayout>
        </Router>
      </Provider>
    );
  }
}
