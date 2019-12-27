import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=10';
  constructor(private http: HttpClient) { }

  //Get todos..
  getTodos():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Delete Todo
  deleteTodo(todo: Todo):Observable<Todo>{
    return this.http.delete<Todo>(`${this.todosUrl}/${todo.id}`, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  //Toggle Completed..
  toggleCompleted(todo: Todo):Observable<any>{
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo, httpOptions)
  }
}