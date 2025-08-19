import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; //veriyi tabloya bağlama
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

type Role = 0 | 1 | 2; // backend’e göre uyarlayacağız
interface UserRow {
  id: number;
  name: string;
  email: string;
  role: Role;
  created_at: string;
}

const MOCK_USERS: UserRow[] = [
  { id: 1, name: 'Nisa',   email: 'nisa@gmail.com',   role: 1, created_at: '2025-07-24 14:01:41' },
  { id: 2, name: 'Beyza',  email: 'beyza@gmail.com',  role: 2, created_at: '2025-07-24 14:01:41' },
  { id: 3, name: 'Emirhan',email: 'emirhan@gmail.com',role: 2, created_at: '2025-07-28 11:21:27' },
];



@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements AfterViewInit {
  displayedColumns = ['id', 'name', 'email', 'role', 'created_at', 'actions'];
  dataSource = new MatTableDataSource<UserRow>(MOCK_USERS);

  @ViewChild(MatPaginator) paginator!: MatPaginator; //sayflama
  @ViewChild(MatSort) sort!: MatSort; // sıralama

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}