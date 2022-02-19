'use strict';

const letVar = function() {
  // let & var:
  const a = 5;
  // eslint-disable-next-line no-var
  var b = 10;

  if (a === 5) {
    const a = 4; // El alcance es dentro del bloque if
    // eslint-disable-next-line no-var
    var b = 1; // El alcance es global

    console.log(a); // 4
    console.log(b); // 1
  }

  console.log(a); // 5
  console.log(b); // 1
};

const envFunctions = function() {
  // Environment functions
  console.log('Hello World!'); // Prints on terminal
  // Show on web page a questions and resquest the asnwer
  prompt('Enter your name:');
  alert('Your password is too short!'); // Show on web page an alert

  // Math
  console.log(Math.max([1, 4, 7, 2, 3]));
  console.log(Math.cos(0.53));
  console.log(Math.floor(9.9999));
};

const conditionals = function() {
  // Conditionals
  const a = 10;
  if (a === 10) {
    console.log('if');
  }
  switch (a) {
    case 10:
      console.log('switch');
      break;
    default:
      console.log('Error');
  }
};

const loops = function() {
  // Loops
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }

  i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 10);

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  const obj = {a: 'Hello', b: 'World', c: '!'};
  // eslint-disable-next-line guard-for-in
  for (const element in obj) {
    console.log(element, obj[element]);
  }

  const list = ['Hello', 'World', '!'];
  for (const element of list) {
    console.log(element);
  }
};

// eslint-disable-next-line require-jsdoc
function main() {
  letVar();
  envFunctions();
  conditionals();
  loops();
}

if (require.main === module) {
  main();
}
