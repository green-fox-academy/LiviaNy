`use strict`;
import { Domino } from './domino';
import { Todo } from './todo';

let dominoes: Domino[] = [];
let domino: Domino = new Domino(3, 2);
let todos: Todo[] = [];
let todo: Todo = new Todo(`Buy milk`, `High`);
dominoes.push(domino);
todos.push(todo);

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
