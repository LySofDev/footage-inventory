import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private isOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isOpen = new BehaviorSubject<boolean>( false );
  }

  getIsOpen(): Observable<boolean> {
    return this.isOpen;
  }

  open() {
    this.isOpen.next( true );
  }

  close() {
    this.isOpen.next( false );
  }

  toggle() {
    this.isOpen.next( !this.isOpen.value );
  }

}
