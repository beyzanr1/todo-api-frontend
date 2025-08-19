import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';

@Component({
  selector: 'app-tasks-detail',
  standalone: false,
  templateUrl: './tasks-detail.html',
  styleUrl: './tasks-detail.scss'
})
export class TasksDetail  implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(pm => {
      const s = pm.get('id');
      this.id = s ? Number(s) : NaN;
    });
  }
}
