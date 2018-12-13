import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';
import { MenuComponent } from './components/menu/menu.component';
import { FindComponent } from './components/find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ShowComponent,
    MenuComponent,
    FindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
