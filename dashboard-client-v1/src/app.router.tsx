import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { AppLayout } from './app.layout';
import { default as history } from './history';
import { default as Home } from './home';
import { Dashboard } from './dashboard';
import { default as store } from './store';

const HomeComponent = () => (<Home />);
const DashboardComponent = () => (<Dashboard />);

export class AppRouter extends React.PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <AppLayout>
            <Route path="/" exact={true} render={HomeComponent} />
            <Route path="/dashboard" render={DashboardComponent} />
          </AppLayout>
        </Router>
      </Provider>
    );
  }
}
