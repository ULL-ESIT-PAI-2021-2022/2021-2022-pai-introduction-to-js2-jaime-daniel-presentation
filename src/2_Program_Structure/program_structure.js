"use strict";

const let_var = function() {
  // let & var:
  var a = 5;
  var b = 10;

  if (a === 5) {
    let a = 4; // El alcance es dentro del bloque if
    var b = 1; // El alcance es global

    console.log(a);  // 4
    console.log(b);  // 1
  }

  console.log(a); // 5
  console.log(b); // 1
}

const env_functions = function() {
  // Environment functions
  console.log("Hello World!"); // Prints on terminal
  prompt("Enter your name:"); // Show on web page a questions and resquest the asnwer
  alert("Your password is too short!"); // Show on web page an alert

  // Math
  console.log(Math.max([1, 4, 7, 2, 3]));
  console.log(Math.cos(0.53));
  console.log(Math.floor(9.9999));
}

const conditionals = function() {
  // Conditionals
  let a = 10;
  if (a === 10) {
    console.log("if");
  }
  switch (a) {
    case 10:
      console.log("switch");
      break;
    default:
      console.log("Error");
  }
}

const loops = function() {
  // Loops
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }

  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 10);

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  let obj = {a: "Hello", b: "World", c: "!"};
  for (let element in obj) {
    console.log(element, obj[element]);
  }

  let list = ["Hello", "World", "!"];
  for (let element of list) {
    console.log(element);
  }
}

function main() {
  let_var();
  env_functions();
  conditionals();
  loops();
}

if (require.main === module) {
  main();
}
