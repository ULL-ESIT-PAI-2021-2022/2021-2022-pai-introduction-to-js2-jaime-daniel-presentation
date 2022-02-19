"use strict";

function main() {
  // typeof operator
  console.log(typeof a);
  console.log(typeof 1);
  console.log(typeof "1");
  console.log(typeof true);
  console.log(typeof undefined);
  console.log(typeof null);
  console.log(typeof {});
  console.log(typeof []);
  console.log(typeof function () {});
  console.log(typeof NaN);
  console.log(typeof Infinity);

  // Dynamic typing
  let x = 1;
  console.log(x);
  x = "1";
  console.log(x);

  // Implicit type conversion
  const y = 1;
  const z = y + "1";
  console.log(z);
}

if (require.main === module) {
  main();
}
