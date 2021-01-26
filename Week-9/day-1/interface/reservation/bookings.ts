`use strict`;
import { Reservationy } from './reservationy';
const days: string[] = [`Monday`, `Tuesday`, `Wednesday`, `Thusrday`, `Friday`, `Saturday`, `Sunday`];

export class Reservation implements Reservationy {
  getCodeBooking() {
    return Math.random().toString(32).substring(2, 10).toLocaleUpperCase();
  }

  getDowBooking() {
    let index: number = Math.floor(Math.random() * 6);
    return days[index].substring(0, 3).toUpperCase();
  }
  getReservedBooking() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}

let newBooking = new Reservation();
for (let i: number = 0; i < 10; i++) {
  newBooking.getReservedBooking();
}
