'use strict';

// Write a program that prints the following fruits:
function logInTime(text, time) {
  setTimeout(() => {
    console.log(text);
  }, time);
}

// apple -> immediately
logInTime(`apple`, 0);
// pear -> after 1 seconds
logInTime(`pear`, 1000);
// melon -> after 3 seconds
logInTime(`melon`, 3000);
// grapes -> after 5 seconds
logInTime(`grapes`, 5000);
