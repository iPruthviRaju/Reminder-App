import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'To-do one',
        completed: false
      },
      {
        id: 2,
        title: 'To-do two',
        completed: false
      },
      {
        id: 3,
        title: 'To-do three',
        completed: false
      },
      {
        id: 4,
        title: 'To-do four',
        completed: false
      }
    ]
  }
}
