'use strict';

const b = {c: 1};
const a = b;

b.d = {d: 2};
a.e = 2;

console.log(a);
console.log(b);

