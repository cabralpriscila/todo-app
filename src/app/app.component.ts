import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: any[] = [];
  title: String = 'Tarefas';

  constructor(){
    this.todos.push('Primeiro item');
    this.todos.push('Segundoo item');
    this.todos.push('Terceiro item');
    this.todos.push('Quarto item');
  }


}
