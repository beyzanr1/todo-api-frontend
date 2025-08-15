
import { Component,EventEmitter,Output,Input  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
   @Input()  collapsed = false;
   
  @Output() collapsedChange = new EventEmitter<boolean>();


  toggle() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

  
}