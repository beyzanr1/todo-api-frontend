import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail {
 id: number;

  constructor(private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('beyza',this.id);
  }

}
