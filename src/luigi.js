const readlineSync = require ("readline-sync");

const MIN = 1
const MAX = 24

console.log();

do {
  height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height))

console.log();
length = height + 1;
let luigi = "";

for (let i = 2; i <= length; i++) {
  for (let j = length - i; j > 0; j -= 1) {
    luigi += " ";
  }
  for (let k = i; k > 0; k -= 1) {
    luigi += "#";
  }
  luigi += "  ";
  for (let k = i; k > 0; k -= 1) {
    luigi += "#";
  }
  luigi += "\n";
}

console.log(luigi);
