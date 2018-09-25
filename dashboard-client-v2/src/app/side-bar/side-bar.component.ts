import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SideBarService } from './side-bar.service';

@Component({
  selector: 'fi-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isOpen: boolean;

  constructor(
    private sideBarService: SideBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sideBarService.getIsOpen().subscribe( ( isOpen: boolean ) => {
      this.isOpen = isOpen;
    } );
  }

}
