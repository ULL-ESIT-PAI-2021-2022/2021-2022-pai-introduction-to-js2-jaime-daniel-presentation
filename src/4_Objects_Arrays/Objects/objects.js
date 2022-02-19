'use strict';

const objets = () => {
  const object = {
    name: 'Daniel',
    alu: '0101331720',
    subjetcs: ['PAI', 'IAA', 'PL', 'DAA', 'TID'],
    PAI: {
      name: 'Progamacion de Aplicaciones Interactivas',
      teacher: 'F. Sande',
      grade: '3',
    },
  };
  console.log(object.name);
  console.log(object['subjetcs'][0]);
  console.log(object.PAI.name);

  delete object.PAI;
  console.log(object);
  console.log('alu' in object);

  console.log(Object.keys(object));
};

const assignFn = () => {
  const object = {
    name: 'Daniel',
    alu: '0101331720',
    subjetcs: ['PAI', 'IAA', 'PL', 'DAA', 'TID'],
  };

  const object2 = {
    name: 'Jaime',
    alu: '0101329093',
    something: 'something',
  };

  Object.assign(object, object2);
  console.log(object);
};

// eslint-disable-next-line no-unused-vars
const arrayOfObjects = () => {
  console.log([
    {
      name: 'Daniel',
      alu: '0101331720',
    },
    {
      name: 'Jaime',
      alu: '0101329093',
    },
  ]);
};

const copyObj = () => {
  const object = {
    name: 'Daniel',
  };

  const objectCopy = object;
  objectCopy.name = 'Roberto';

  console.log(object);
  console.log(objectCopy);

  const objectCopy2 = Object.assign({}, object);
  objectCopy2.name = 'Maria';

  console.log(object);
  console.log(objectCopy2);
};

const constObjFn = () => {
  const objConst = {
    animals: ['Dog', 'Cat', 'Bird'],
  };

  objConst.animals.push('Fish');
  console.log(objConst);

  // obj_const = {}
  // console.log(obj_const);
};

// eslint-disable-next-line require-jsdoc
function main() {
  console.log('\n1\n');
  objets();

  console.log('\n2\n');
  assignFn();

  console.log('\n3\n');
  arrayOfObjects();

  console.log('\n4\n');
  copyObj();

  console.log('\n5\n');
  constObjFn();
}

if (require.main === module) {
  main();
}
