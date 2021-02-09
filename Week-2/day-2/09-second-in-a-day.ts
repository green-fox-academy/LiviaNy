'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let totalCurrentSeconds: number = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
console.log(totalCurrentSeconds);
let SecondsInDay: number = 24 * 3600;

let totalRemainingSeconds: number = SecondsInDay - totalCurrentSeconds;

console.log(Math.floor(totalRemainingSeconds / 3600));
console.log(Math.floor((totalRemainingSeconds % 3600) / 60));
console.log(Math.floor(totalRemainingSeconds % 3600) % 60);
