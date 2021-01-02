'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
let codingHours: number = 6;
let semester: number = 17;
let avWorkingHours: number = 52;
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
console.log(semester * 5 * codingHours);
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
//
console.log(((codingHours * 5 * 17) / (avWorkingHours * 17) * 100).toFixed(2) + `%`);
