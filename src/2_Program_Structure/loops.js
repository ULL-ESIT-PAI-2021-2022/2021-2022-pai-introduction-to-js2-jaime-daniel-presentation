'use strict';

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
