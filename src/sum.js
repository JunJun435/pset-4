const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = Number(readlineSync.question("\nLower Bound: "));
let upperBound = Number(readlineSync.question("Upper Bound: "));
let sum = 0;

while (lowerBound >= upperBound || Number.isNaN(lowerBound) || Number.isNaN(upperBound) || MIN > lowerBound || MAX < upperBound || !Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) {
  lowerBound = Number(readlineSync.question("Lower Bound: "));
  upperBound = Number(readlineSync.question("Upper Bound: "));
}

for (let i = lowerBound; i <= upperBound; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

sum = sum.toLocaleString('en');
console.log("\n" + sum + ".");
