import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo, TODOS } from './todos';

@Injectable()
export class TodosService {
  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }

  addTodo(newTodo: string): void {
    // ¯\_(ツ)_/¯
  }
}
