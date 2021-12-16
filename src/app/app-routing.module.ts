import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoService } from './service/todo.service';

const routes: Routes = [
  { path: 'todo-app', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers:[
    TodoService
  ]
})
export class AppRoutingModule { }
