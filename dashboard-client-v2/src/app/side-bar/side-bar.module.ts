import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarService } from './side-bar.service';
import { LinkComponent } from './link/link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideBarComponent, LinkComponent],
  exports: [SideBarComponent],
  providers: [SideBarService]
})
export class SideBarModule { }
