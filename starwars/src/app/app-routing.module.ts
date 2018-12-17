import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FindComponent } from './find/find.component';
import { ShowComponent } from './show/show.component';
import { ResidentComponent } from './resident/resident.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'personajes', component: ListComponent },
  { path: 'residentes', component: ResidentComponent },
  { path: 'buscar', component: FindComponent },
  { path: 'personaje', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
