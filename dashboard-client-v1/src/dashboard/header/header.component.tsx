import * as React from 'react';
import { HeaderLayout } from './header.layout';

interface HeaderComponentProps {
  title?: string;
}

interface HeaderComponentState {
  title: string;
}

export class HeaderComponent extends React.Component<HeaderComponentProps, HeaderComponentState> {
  public state = {
    title: 'Dashboard'
  }

  public render() {
    return (
      <HeaderLayout
        title={this.props.title || this.state.title}
      />
    );
  }
}
