'use strict';

// eslint-disable-next-line require-jsdoc
function main() {
  // STRINGS:
  // Strings can be defined with single or double quotes.
  str1 = 'Hello';
  str2 = ' World';
  console.log(str1 + str2 + '!');

  // Also works with back-ticks:
  str3 = `${str1}${str2}!`;
  console.log(str3);

  // UNDEFINED & NULL:
  // Undefined is a special value that represents a variable that has not been
  // assigned a value.
  // Null is a special value that represents an empty value.
  let x;
  console.log(x);
  console.log(1 + x);
  console.log(1 + null);
}

if (require.main === module) {
  main();
}

