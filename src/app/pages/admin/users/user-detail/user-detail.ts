import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { UserRow, FieldDef } from '../../../../models';


@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail implements OnInit {
  user: UserRow | null = null;
  loading = false;
  error: string | null = null;

  fields: FieldDef<UserRow>[] = [
    { label: 'Ad',        key: 'name' },
    { label: 'E-posta',   key: 'email' },
    { label: 'Rol',       key: 'role' },
    { label: 'Oluşturma', valueFn: u => u.created_at ? new Date(u.created_at).toLocaleString() : '' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userSvc: UserService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetch(id);
  }

  fetch(id: number)  {
    this.loading = true;
    this.error = null;

    this.userSvc.get(id).subscribe({
      next: (res) => {
        this.user = res ?? null;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Kullanıcı yüklenemedi.';
        this.loading = false;
      },
    });
  }


  edit()   { if (this.user) this.router.navigate(['/admin','users', this.user.id, 'edit']); }
  remove() {  }
}