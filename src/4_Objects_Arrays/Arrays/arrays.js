'use strict';

// eslint-disable-next-line require-jsdoc
function main() {
  const array = [1, 2, 3, 4, 5];
  console.log(array.length);

  const string = 'Hello';
  console.log(string.length);
  console.log(string.toUpperCase());

  for (let i = array.length; i < 100; i++) {
    array.push(i);
  }
  console.log(array);
}

if (require.main === module) {
  main();
}
