const readlineSync = require("readline-sync");

let x = 1
let y =  Number.MAX_SAFE_INTEGER;

while (x < 1 && x <= y) {
    x = Number(readlineSync.question("\nPositive integer: "));
}

console.log("\n" + x + ".");
