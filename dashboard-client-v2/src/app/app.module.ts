import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { VideosModule } from './videos/videos.module';
import { HeaderModule } from './header/header.module';
import { ClipsModule } from './clips/clips.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SideBarModule } from './side-bar/side-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    VideosModule,
    HeaderModule,
    ClipsModule,
    DashboardModule,
    SideBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
