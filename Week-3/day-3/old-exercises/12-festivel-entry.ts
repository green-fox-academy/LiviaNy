'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
  name: string;
  alcohol: number;
  guns: number;
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 },
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival
function securityCheck(queue: any[]): string[] {
  let watchlist: string[] = [];
  let newArray: any[] = [];
  let securityAlcoholLoot: number = 0;
  let canEnter: string[] = [];
  for (let i: number = 0; i < Object.values(queue).length; i++) {
    if (queue[i].guns > 0) {
      watchlist.push(queue[i].name);
    } else {
      newArray.push(queue[i]);
      canEnter.push(queue[i].name);
    }
  }
  queue = newArray;
  for (let j: number = 0; j < queue.length; j++) {
    securityAlcoholLoot += queue[j].alcohol;
    queue[j].alcohol = 0;
  }
  return canEnter;
}

console.log(securityCheck(queue));
export = securityCheck;
