// eslint-disable-next-line require-jsdoc
function sayParameters(...values) {
  for (const value of values) {
    console.log(value);
  }
}

sayParameters(1, true, 'hola');
