const readlineSync = require("readline-sync");

MIN = 0;
MAX = Number.MAX_SAFE_INTEGER;

console.log("")
let input = 0;
do {
  input = Number(readlineSync.question("Non-negative integer: "));
} while (input < MIN || input > MAX || !Number.isInteger(input));

let primeNum = true;
for (let i = 2; i < input; i = i + 1) {
  if (input % i == 0) {
    primeNum = false;
  }
}

if (input == 0) {
  console.log("\nNot prime.");
} else if (input == 1) {
  console.log("\nNot prime.");
} else if (primeNum == true) {
  console.log("\nPrime.")
} else {
  console.log("\nNot prime.")
}
