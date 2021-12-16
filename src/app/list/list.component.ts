import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todo:Todo;
  todos:Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  private getAllTodos(){
    this.todoService.getTodos().subscribe(todosList => (this.todos)= todosList);
  }
}
