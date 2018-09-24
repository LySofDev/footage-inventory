import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideosComponent } from './videos/videos.component';
import { ClipsComponent } from './clips/clips.component';

const routes: Routes = [
  { path: 'videos', component: VideosComponent, children: [
    { path: ':id/clips', component: ClipsComponent }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
