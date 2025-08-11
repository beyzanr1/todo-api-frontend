
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
   styleUrl: './app.scss'
})
export class App {
   collapsed = false;

  // Sidebar bileşeninden gelen değişikliği yakalayıp state’i güncelliyoruz
  onCollapsed(v: boolean) {
    this.collapsed = v;
  }
}