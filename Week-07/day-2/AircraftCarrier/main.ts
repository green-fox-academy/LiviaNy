`use strict`;
import { Carrier } from './carrier';
import { F16 } from './F16';
import { F35 } from './F35';

let carrierOne = new Carrier(500, 2500);
let carrierTwo = new Carrier(800, 5000);
let RedOne = new F35();
let RedTwo = new F35();
let RedThree = new F35();
let RedFour = new F35();
let RedFive = new F35();

let BlueOne = new F16();
let BlueTwo = new F16();
let BlueThree = new F16();
let BlueFour = new F16();
let BlueFive = new F16();
let BlueSix = new F16();
let BlueSeven = new F16();
let BlueEight = new F16();

carrierOne.add(RedOne);
carrierOne.add(RedTwo);
carrierOne.add(RedThree);
carrierOne.add(RedFour);
carrierOne.add(RedFive);

carrierTwo.add(BlueOne);
carrierTwo.add(BlueTwo);
carrierTwo.add(BlueThree);
carrierTwo.add(BlueFour);
carrierTwo.add(BlueFive);
carrierTwo.add(BlueSix);
carrierTwo.add(BlueSeven);
carrierTwo.add(BlueEight);

carrierOne.fill(500);
carrierTwo.fill(500);

console.log(carrierOne.getStatus());
console.log(carrierTwo.getStatus());

carrierOne.fight(carrierTwo);

console.log(carrierOne.getStatus());
console.log(carrierTwo.getStatus());
