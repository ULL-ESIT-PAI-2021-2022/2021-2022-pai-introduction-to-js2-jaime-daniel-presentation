'use strict';

// eslint-disable-next-line require-jsdoc
function sayWith(includedText) {
  return (text) => `${includedText} ${text}`;
}

const sayWithHello = sayWith('Hello,');

// eslint-disable-next-line require-jsdoc
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

// eslint-disable-next-line require-jsdoc
function main() {
  console.log(sayWithHello('Jaime'));
  console.log(minus(10));
  console.log(minus(10, 5));
}

if (require.main === module) {
  main();
}
