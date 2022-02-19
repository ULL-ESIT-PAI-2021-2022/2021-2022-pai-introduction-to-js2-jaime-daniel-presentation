'use strict';

const a = 5;
// eslint-disable-next-line no-var
var b = 10;

if (a === 5) {
  const a = 4;
  // eslint-disable-next-line no-var
  var b = 1;

  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);
