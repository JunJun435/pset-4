const readlineSync = require('readline-sync');

const MAX = 24;
const MIN = 1;

let mario = readlineSync.question('\nHeight: ');

while (mario < 1 || mario > 24) {
  mario = readlineSync.question("Height: ");

  mario = parseInt(mario);

  if (mario > 0 && mario <= 24) {

    for (i = 1; i <= mario; i++) {
      var spaces = mario - i;
      var tags = i + 1;

      var space = ('');
      var hashtag = ('');

      for (j = 1; j <= spaces; j++) {
        space += ' ';
      }
      for (j = 1; j <= tags; j++) {
        hashtag += '#';

      }
      console.log(space + hashtag);
    }
  }
}
