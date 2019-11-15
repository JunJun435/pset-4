const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let number = Number(readlineSync.question("\nPositive integer: "))

function reverseNumber(number) {
  var revNumber = MIN;
  while (number < MIN && number > MAX) {
    number = Number(readlineSync.question("\nPositive integer: "))

    if (number > MIN && number < MAX)
    revNumber = (revNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}
console.log(reverseNumber("\n" + revNumber + "."));
