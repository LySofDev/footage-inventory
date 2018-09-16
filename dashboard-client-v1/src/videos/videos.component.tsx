import * as React from 'react';
import { Dashboard } from '../dashboard';
import { VideosLayout } from './videos.layout';

export class VideosComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <Dashboard title="Videos">
        <VideosLayout />
      </Dashboard>
    );
  }
}
