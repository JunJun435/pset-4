const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInteger = Number(readlineSync.question("\nPositive integer: "));

while Number.isNan(positiveInteger) || positiveInteger < MIN || positiveInteger > MAX || Number.isInteger(positiveInteger) {
  positiveInteger = Number(readlineSync.question("\nPositive integer: "));
}
