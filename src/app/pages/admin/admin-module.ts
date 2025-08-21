import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing-module';


import { Dashboard } from './dashboard/dashboard';
import { UserList } from './users/user-list/user-list';
import { UserDetail } from './users/user-detail/user-detail';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule }     from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule }      from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatButtonModule }    from '@angular/material/button';
import { MatIconModule }      from '@angular/material/icon';

import { TaskList } from './tasks/task-list/task-list';
import { TasksDetail } from './tasks/tasks-detail/tasks-detail';
import { ListTable } from '../../components/list-table/list-table';
import { DetailCard } from '../../components/detail-card/detail-card';


@NgModule({
  declarations: [
    Dashboard,
    UserList, UserDetail, TaskList, TasksDetail,ListTable,DetailCard
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
   

  MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AdminModule {}
