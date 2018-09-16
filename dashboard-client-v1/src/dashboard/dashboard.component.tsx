import * as React from 'react';
import { DashboardLayout } from './dashboard.layout';

export class DashboardComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <DashboardLayout>{this.props.children}</DashboardLayout>
    );
  }
}
