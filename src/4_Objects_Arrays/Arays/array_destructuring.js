'use strict';

const array = ['a', {b: 'b'}, ['c'], 1, true];

const [a, b, c, d, e] = array;
console.log(a, b, c, d, e);
// a { b: 'b' } [ 'c' ] 1 true

const [f, g] = array;
console.log(f, g);
// a { b: 'b' }
