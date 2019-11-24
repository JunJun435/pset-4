const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

console.log("");
let input = 0;
do {
  input = Number(readlineSync.question("Positive integer: "));
} while (input < MIN || input > MAX);

let firstNum = 1.618 ** input;
let secondNum = 0.618 ** input;

let firstRule = firstNum - secondNum;
let secondRule = firstRule / 2.236;
let rule = Math.ceil(secondRule);
let fibonacciNum = rule.toLocaleString("en");

console.log("\n" + fibonacciNum + ".")
