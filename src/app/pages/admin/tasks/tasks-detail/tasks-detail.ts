import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { TaskService } from '../../../../services/task.service';
import { TaskRow,FieldDef } from '../../../../models';

@Component({
  selector: 'app-tasks-detail',
  standalone: false,
  templateUrl: './tasks-detail.html',
  styleUrl: './tasks-detail.scss'
})
export class TasksDetail  implements OnInit {
   task: TaskRow | null = null;
  loading = false;
  error: string | null = null;

  fields: FieldDef<TaskRow>[] = [
    { label: 'Başlık',    key: 'title' },
    { label: 'Durum',     key: 'status' },
    { label: 'Öncelik',   key: 'priority' },
    { label: 'Kullanıcı', key: 'user_id' },
    { label: 'Oluşturma', valueFn: t => t.created_at ? new Date(t.created_at).toLocaleString() : '' },
    { label: 'Güncelleme', valueFn: t => t.updated_at ? new Date(t.updated_at).toLocaleString() : '' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskSvc: TaskService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    if (!Number.isFinite(id)) {
      this.error = 'Geçersiz görev id değeri.';
      return;
    }
    this.fetch(id);
  }

  fetch(id: number) {
    this.loading = true; this.error = null;

    this.taskSvc.get(id).subscribe({
      next: (task: TaskRow) => { this.task = task; this.loading = false; },
      error: (err) => {
        console.error(err);
        this.error = 'Görev yüklenemedi.';
        this.loading = false;
      }
    });
  }

  edit()   { if (this.task) this.router.navigate(['/admin','tasks', this.task.id, 'edit']); }
  remove() {  }
}