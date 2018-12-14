import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
    { path: 'personajes', component: ListComponent },
    { path: 'buscar', component: FindComponent },
    { path: 'personaje', component: ShowComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
