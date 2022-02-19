'use strict';

const a = 5;
var b = 10;

if (a === 5) {
  const a = 4;
  var b = 1;

  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);
