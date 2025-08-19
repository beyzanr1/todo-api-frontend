import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
//import { AdminModule } from './pages/admin/admin-module';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'admin'},
  {
    path:'admin',
    loadChildren:()=>
      import('./pages/admin/admin-module').then(m=> m.AdminModule)

  },
  {path: '**',redirectTo:'admin'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules,
    scrollPositionRestoration:'enabled',
    anchorScrolling:'enabled'
  }


  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
