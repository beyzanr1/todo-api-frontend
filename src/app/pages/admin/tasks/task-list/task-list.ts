import { AfterViewInit,Component,viewChild,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

type Status= 'pending'| 'completed';
type Priority= 'low'|'medium'|'high';

interface TaskRow{
  id: number;
  title:string;
  status:Status;
  priority: Priority;
  user_id: number;
  created_at: string;
}

const MOCK_TASKS: TaskRow[]= [
  { id: 1, title: 'Angular öğren',    status: 'pending',   priority: 'medium', user_id: 1, created_at: '2025-07-22 17:59:03' },
  { id: 2, title: 'Enum testi',       status: 'pending',   priority: 'high',   user_id: 1, created_at: '2025-07-22 18:28:18' },
  { id: 3, title: 'E-posta kontrolü', status: 'completed', priority: 'low',    user_id: 2, created_at: '2025-07-22 18:28:18' },
  { id: 4, title: 'Kod inceleme',     status: 'pending',   priority: 'medium', user_id: 2, created_at: '2025-07-22 18:28:18' },
  { id: 5, title: 'Yeni Görev',       status: 'pending',   priority: 'high',   user_id: 3, created_at: '2025-07-29 14:46:17' },
];



@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList implements AfterViewInit{
  displayedColumns=['id','title','status','priority','user_id','created_at','actions'];
  dataSource= new MatTableDataSource<TaskRow>(MOCK_TASKS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator= this.paginator;
    this.dataSource.sort= this.sort;
  }

  applyFilter(value: string){
    this.dataSource.filter= value.trim().toLowerCase();
  }



}
