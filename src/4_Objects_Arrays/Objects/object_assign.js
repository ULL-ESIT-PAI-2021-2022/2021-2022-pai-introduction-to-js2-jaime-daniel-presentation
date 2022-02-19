const b = {c: 2};
const a = {};
Object.assign(a, b);

b.d = 2;

console.log(a);
// { c: 2 }
