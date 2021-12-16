import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { TodoService } from './service/todo.service';

const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers:[
    TodoService
  ]
})
export class AppRoutingModule { }
