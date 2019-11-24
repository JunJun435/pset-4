const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let input = 0;
do {
  input = Number(readlineSync.question("Positive integer: "));
} while (input < MIN || input > MAX || !Number.isInteger);

let display = "";
let factor = 0;
for (num = 1; num < input; num = num + 1) {
  if (input % num == 0) {
    factor = input / num;
    display = display + num + factor + ", ";
  }
}

console.log("\n" + display + ".")
