import { Component } from '@angular/core';
import { TODOS } from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  title = 'My awesome todo list';
  todos = TODOS;
}
