import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Todo } from "../model/Todo";
import { Observable } from "rxjs";

const routes = {
    todo: 'http://localhost:9090/todo-app/todo'

}

@Injectable()
export class TodoService {

    constructor(private httpClient: HttpClient) {

     }

     todo: Todo;
     todos: Todo[];

     getTodos(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(routes.todo);
        }   
}