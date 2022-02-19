'use strict';

// eslint-disable-next-line require-jsdoc
function sayWith(includedText) {
  return (text) => `${includedText} ${text}`;
}

const sayWithHello = sayWith('Hello,');

console.log(sayWithHello('Jaime'));

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5