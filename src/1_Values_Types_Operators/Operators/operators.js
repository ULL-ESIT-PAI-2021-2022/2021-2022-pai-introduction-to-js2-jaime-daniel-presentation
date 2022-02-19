'use strict';

// eslint-disable-next-line require-jsdoc
function main() {
  // EQUALITY OPERATORS:
  // ===, !==, ==, !=
  const x = 10;
  const y = '10';
  console.log(x === y);
  console.log(x !== y);
  console.log(x == y);
  console.log(x != y);

  // OR, AND ASSIGNMENT OPERATORS:
  // ||, &&
  const a = 10 || 20;
  const b = false || 20;
  const c = 10 && 20;
  const d = null && 20;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

if (require.main === module) {
  main();
}
