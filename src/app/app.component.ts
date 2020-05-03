import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  title: String = 'Tarefas';
  form: FormGroup;

  constructor(){
    this.todos.push(new Todo(1, 'Ir ao supermercado', false));
    this.todos.push(new Todo(2, 'Cortar o cabelo', false));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }

}
