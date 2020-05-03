import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
  title: String = 'Tarefas';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      task: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.required,
      ])]
    });
  }

  add(){
    const task = this.form.controls['task'].value;
    const id = this.todos.length +1;
    this.todos.push(new Todo(id, task, false));
    this.clear();
  }

  clear(){
    this.form.reset();
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
