import * as React from 'react';
import { DashboardLayout } from './dashboard.layout';

interface DashboardComponentProps {
  title?: string;
}

export class DashboardComponent extends React.Component<DashboardComponentProps, {}> {
  public render() {
    return (
      <DashboardLayout title={this.props.title}>{this.props.children}</DashboardLayout>
    );
  }
}
