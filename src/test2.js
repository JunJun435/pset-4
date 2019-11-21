const readlineSync = require("readline-sync");

const num = Number(readlineSync.question("\nPositive integer: "))

function reversedNum(num) {
  return (
   parseFloat(
     num
       .toString()
       .split('')
       .reverse()
   )
 )
}

console.log(reversedNum(num))
