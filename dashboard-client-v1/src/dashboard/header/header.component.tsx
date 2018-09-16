import * as React from 'react';
import { HeaderLayout } from './header.layout';

interface HeaderComponentState {
  title: string;
}

export class HeaderComponent extends React.Component<{}, HeaderComponentState> {
  public state = {
    title: 'Dashboard'
  }

  public render() {
    return (<HeaderLayout title={this.state.title} />);
  }
}
