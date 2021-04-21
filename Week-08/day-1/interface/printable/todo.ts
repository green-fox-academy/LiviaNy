`use strict`;
import { Printable } from './printable';

export class Todo implements Printable {
  _task: string;
  _priority: string;
  _status: boolean;

  constructor(task: string, priority: string) {
    this._task = task;
    this._priority = priority;
    this._status = false;
  }

  doneTask(): void {
    this._status = true;
  }

  printAllFields() {
    console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._status}`);
  }
}
