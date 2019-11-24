const readlineSync = require('readline-sync');

let height = 0;

console.log();

while (height < 1 || height > 24) {
  height = readlineSync.question("Height: ");

  value = parseInt(height);

  if (value > 0 && value <= 24) {

    for (i = 1; i <= value; i++) {
    var spaces = value - i;
    var hashtags = i + 1;

    var space = '';
    var hashtag = '';

    for( j = 1; j <= spaces; j++) {
    space += ' ';
    }
    for( j = 1; j <= hashtags; j++ ) {
    hashtag += '#';
    }
    console.log(space + hashtag + " " + hashtag);
    }
    }
    }
