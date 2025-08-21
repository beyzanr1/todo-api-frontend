import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskRow ,ColumnDef} from '../../../../models';
import { TaskService } from '../../../../services/task.service';



@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList implements  OnInit {
  columns: ColumnDef<TaskRow>[] = [
    { key: 'id',        header: 'ID' },
    { key: 'title',     header: 'Başlık' },
    { key: 'status',    header: 'Durum' },
    { key: 'priority',  header: 'Öncelik' },
    { key: 'user_id',   header: 'Kullanıcı' },
    {
      key: 'created_at',
      header: 'Oluşturma',
      valueFn: (t) => t.created_at ? new Date(t.created_at).toLocaleString() : ''
    },
    { key: 'actions',   header: 'Detay', kind: 'action', actionText: 'Detay', actionType: 'detail' }
  ];

  // İsteğe bağlı: Arama sadece bu alanlarda çalışsın
  filterKeys: Array<keyof TaskRow | string> = ['id','title','status','priority','user_id','created_at'];

  tasks: TaskRow[] = [];
  loading = false;
  error: string | null = null;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.loading = true;
    this.error = null;

    this.taskService.list().subscribe({
      next: (res) => {
        const normalized = (res ?? []).map((t: any) => ({
          ...t,
          user_id:    t.user_id ?? t.userId ?? t.user?.id ?? null,
          created_at: t.created_at ?? t.createdAt ?? null,
          updated_at: t.updated_at ?? t.updatedAt ?? null,
        })) as TaskRow[];

        this.tasks = normalized;
        this.loading = false;
        console.table(normalized);
      },
      error: (err) => {
        console.error('Tasks error:', err);
        this.error = 'Görevler yüklenirken bir hata oluştu.';
        this.loading = false;
      },
    });
  }

  goDetail(row: TaskRow) {
    this.router.navigate(['/admin','tasks', row.id]);
  }
}
