'use strict';

// eslint-disable-next-line require-jsdoc
function main() {
  str1 = 'Hello';
  str2 = ' World';
  console.log(str1 + str2 + '!');

  // Also works with back-ticks:
  str3 = `${str1}${str2}!`;
  console.log(str3);

  let x;
  console.log(x);
  console.log(1 + x);
  console.log(1 + null);
}

if (require.main === module) {
  main();
}

