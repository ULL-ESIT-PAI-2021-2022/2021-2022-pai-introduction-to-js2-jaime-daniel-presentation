'use strict';

const obj = {a: 'Hello', b: 'World', c: '!'};
// eslint-disable-next-line guard-for-in
for (const element in obj) {
  console.log(element, obj[element]);
}
