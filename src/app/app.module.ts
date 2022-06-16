import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddReservComponent } from './add-reserv/add-reserv.component';
import { EditReservComponent } from './edit-reserv/edit-reserv.component';
import { ListReservComponent } from './list-reserv/list-reserv.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'add' , component: AddReservComponent },
  { path: 'edit', component: EditReservComponent },
  { path: 'list', component: ListReservComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddReservComponent,
    EditReservComponent,
    ListReservComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
