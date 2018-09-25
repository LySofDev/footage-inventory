import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SideBarService } from './side-bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
  providers: [SideBarService]
})
export class SideBarModule { }
