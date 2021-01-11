import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
let milk = new Thing(`Get milk`);
fleet.add(milk);

// 2. [ ] Remove the obstacles
let remove = new Thing(`Remove obstacles`);
fleet.add(remove);

// 3. [x] Stand up
let stand = new Thing(`Stand up`);
fleet.add(stand);
stand.complete();
stand.getCompleted();

// 4. [x] Eat lunch
let eat = new Thing(`Eat lunch`);
fleet.add(eat);
eat.complete();
eat.getCompleted();

console.log(fleet.toString());
