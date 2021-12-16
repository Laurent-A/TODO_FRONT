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
  stateForm: FormGroup;
  form: FormGroup;
  isFalse: boolean = false;
  showForm: boolean = false;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllTodos();
    this.createFormState();
    this.createFormTodo();
  }

  private getAllTodos(){
    this.todoService.getTodos().subscribe(todosList => (this.todos)= todosList);
  }

  private createFormState(){
    this.stateForm = this.formBuilder.group({
      state:['',Validators.required],
    })
  }

  private createFormTodo(){
    this.todoForm = this.formBuilder.group({
      title:['',Validators.required],
      detail:[null]
    })
  }

  public updateTodo(id: number){
    this.todo = this.todos.find(x=>x.id === id);
    this.todo.state = this.stateForm.get('state').value;
    this.todoService.updateTodo(this.todo, id)
      .subscribe(() => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
  
  public storeTodo(todo: Todo){
    localStorage.setItem('todo', JSON.stringify(todo));
  }

  public showTodoForm(){
    this.todoForm.reset();
    this.showForm = true;
  }

  public cancelCreate(){
    this.todoForm.reset();
    this.showForm = false;
  }

  onSubmit() {
    
    if (this.todoForm.invalid) {
      alert('formulaire incomplet')
      return;
    }
    const todo: Todo = this.todoForm.getRawValue()
    todo.state = true;
    this.todoService.postTodo(todo)
    .subscribe(() => {
        console.log('Enregistrement terminé !');
        this.getAllTodos();
        this.todoForm.reset();
        this.showForm = false;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
