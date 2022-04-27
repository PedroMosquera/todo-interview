import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosComponent } from './todos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class TodosModule { }
