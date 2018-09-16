import * as React from 'react';
import { Dashboard } from '../dashboard';
import { ClipsLayout } from './clips.layout';

export class ClipsComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <Dashboard title="Clips">
        <ClipsLayout />
      </Dashboard>
    );
  }
}
