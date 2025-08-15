
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
   styleUrl: './app.scss'
})
export class App {
   collapsed = false;
   isRed=true;

  
   onCollapsed(value: boolean){


    this.collapsed= value;
   }


  }
