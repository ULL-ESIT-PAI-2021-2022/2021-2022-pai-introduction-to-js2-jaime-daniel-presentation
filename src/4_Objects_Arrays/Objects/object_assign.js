'use strict';

const b = {c: 2};
const a = {};
Object.assign(a, b);

b.d = {d: 2};
a.e = 2;

console.log(a);
console.log(b);
// { c: 2 }
