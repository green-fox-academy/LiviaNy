`use strict`;
import { Animals } from './../../abstract/zoo/animals';
import { Flyable } from './flyable';

export class Bird extends Animals implements Flyable {
  land() {
    console.log(`I can land anywhere`);
  }
  fly() {
    console.log(`I can fly anywhere`);
  }

  takeOff() {
    console.log(`Give me some seeds and I\`ll land.`);
  }
  breed() {
    console.log(`I lay eggs`);
  }
}
