import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  todoForm: FormGroup;
  form: FormGroup;
  isFalse: boolean = false;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllTodos();
    this.createForm();
    
  }

  private getAllTodos(){
    this.todoService.getTodos().subscribe(todosList => (this.todos)= todosList);
  }

  private createForm(){
    this.todoForm = this.formBuilder.group({
      state:['',Validators.required]
    })
  }

  updateTodo(id: number){
    this.todo = this.todos.find(x=>x.id === id);
    this.todo.state = this.todoForm.get('state').value;
   this.todoService.updateTodo(this.todo, id)
    .subscribe(() => {
      console.log('Enregistrement terminé !');
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}
  

}
