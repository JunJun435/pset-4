const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = Number(readlineSync.question("\nLower Bound: "));
let upperBound = Number(readlineSync.question("Upper Bound: "));

while (lowerBound >= upperBound)
