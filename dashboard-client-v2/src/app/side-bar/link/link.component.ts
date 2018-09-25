import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SideBarService } from '../side-bar.service';

@Component({
  selector: 'fi-side-bar-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  private sideBarIsOpen: boolean;
  @Input() label: string;
  @Input() icon: string;
  @Input() endpoint: string;

  constructor(
    private sideBarService: SideBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sideBarService.getIsOpen().subscribe( ( sideBarIsOpen: boolean ) => {
      this.sideBarIsOpen = sideBarIsOpen;
    } );
  }

  goToEndpoint() {
    if ( this.sideBarIsOpen ) {
      this.sideBarService.close();
    }
    this.router.navigate( [this.endpoint] );
  }

}
