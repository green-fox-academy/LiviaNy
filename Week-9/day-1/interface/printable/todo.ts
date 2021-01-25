`use strict`;
import { Printable } from './printable';

export class Todo {
  _task: string;
  _priority: string;
  _status: boolean;

  constructor() {
    this._task = `Buy some milk`;
    this._priority = `high`;
    this._status = true;
  }

  printableFields() {
    console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._status}`);
  }
}
