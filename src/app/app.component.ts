import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  title: String = 'Tarefas';

  constructor(){
    this.todos.push(new Todo(1, 'Ir ao supermercado', false));
    this.todos.push(new Todo(2, 'Cortar o cabelo', false));
  }

  remove(){}

  markAsDone(){}

  markAsUndone(){}

}
