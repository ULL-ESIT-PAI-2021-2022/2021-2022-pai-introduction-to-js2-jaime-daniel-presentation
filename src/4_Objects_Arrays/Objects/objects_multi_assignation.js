'use strict';

let b = 1;
const a = b = {c: 1};

b.d = 2;

console.log(a);
