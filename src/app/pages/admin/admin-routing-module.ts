import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard'; 
import { UserList }   from './users/user-list/user-list';
import { UserDetail } from './users/user-detail/user-detail';
import { TaskList } from './tasks/task-list/task-list';
import { TasksDetail } from './tasks/tasks-detail/tasks-detail';



const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: Dashboard, data: { title: 'Dashboard' } },
   
  { path: 'users',     component: UserList,   data: { title: 'Kullanıcılar' } },
  { path: 'users/:id', component: UserDetail, data: { title: 'Kullanıcı Detayı' } },
  { path: 'tasks',  component:TaskList , data: { title:'Görevler'}},
  {path:'tasks/:id', component:TasksDetail, data:{title:'Görev Detayı'}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
