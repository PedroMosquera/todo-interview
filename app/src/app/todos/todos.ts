export interface Todo {
  description: string,
  done: boolean,
  created: number;
}

export const TODOS: Todo[] = [
  {description: 'Prepare for the interview', done: true, created: 1603450754},
  {description: 'Do an awesome task', done: false, created: 1603450554},
  {description: 'Be nice', done: false, created: 1603450354},
  {description: 'Get hired', done: false, created: 1603450154},
];
