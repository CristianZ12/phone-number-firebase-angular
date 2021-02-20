import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNotesComponent } from './Components/list-notes/list-notes.component';
import { HomeAppComponent } from './Components/home-app/home-app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeAppComponent
  },
  {
    path: 'notes',
    component: ListNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
