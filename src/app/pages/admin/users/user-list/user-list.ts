import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../../services/user.service';
import { UserRow , ColumnDef} from '../../../../models';


@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements  OnInit {

  columns: ColumnDef<UserRow>[] = [
    { key: 'id',         header: 'ID' },
    { key: 'name',       header: 'Ad' },
    { key: 'email',      header: 'E-posta' },
    { key: 'role',       header: 'Rol' },
    {
      key: 'created_at',
      header: 'Oluşturma',
      valueFn: (u) => (u.created_at ? new Date(u.created_at).toLocaleString() : '')
    },
     { key: 'actions', header: 'Detay', kind: 'action', actionText: 'Detay', actionType: 'detail' }
  ];

  users: UserRow[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private userSvc: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.isLoading = true;
    this.error = null;

    this.userSvc.list().subscribe({
      next: (res) => {
        this.users = res ?? [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Users load error:', err);
        this.error = 'Kullanıcılar yüklenirken bir hata oluştu.';
        this.isLoading = false;
      },
    });
  }

  
  goDetail(row: UserRow) {
    this.router.navigate(['/admin', 'users', row.id]);
  }
}