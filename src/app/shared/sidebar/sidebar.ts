
import { Component,EventEmitter,Output,Input  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
   @Input()  collapsed = false;
   


  /** App'e durum yayınla (app.html’de mat-sidenav’e .rail class'ı verilecek) */
  @Output() collapsedChange = new EventEmitter<boolean>();


  toggle() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  
}