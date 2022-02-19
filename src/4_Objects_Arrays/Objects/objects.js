'use strict';

const objets = () => {
  let object = {
    name: "Daniel",
    alu: "0101331720",
    subjetcs: ["PAI", "IAA", "PL", "DAA", "TID"],
    PAI : {
      "name": "Progamacion de Aplicaciones Interactivas",
      "teacher": "F. Sande",
      "grade": "3"
    }
  }
  console.log(object.name);
  console.log(object["subjetcs"][0]);
  console.log(object.PAI.name);

  delete object.PAI;
  console.log(object);
  console.log("alu" in object);

  console.log(Object.keys(object));
};

const assign_fn = () => {
  let object = {
    name: "Daniel",
    alu: "0101331720",
    subjetcs: ["PAI", "IAA", "PL", "DAA", "TID"]
  };

  let object2 = {
    name: "Jaime", 
    alu: "0101329093",
    something: "something"
  };

  Object.assign(object, object2);
  console.log(object);
};

const array_of_objects = () => {
  console.log([
    {
      name: "Daniel",
      alu: "0101331720",
    },
    {
      name: "Jaime",
      alu: "0101329093",
    }
  ]);
};

const copy_obj = () => {
  let object = {
    name: "Daniel"
  };

  let object_copy = object;
  object_copy.name = "Roberto";

  console.log(object);
  console.log(object_copy);

  let object_copy2 = Object.assign({}, object);
  object_copy2.name = "Maria";

  console.log(object);
  console.log(object_copy2);
};

const const_obj_fn = () => {
  const obj_const = {
    animals: ["Dog", "Cat", "Bird"]
  };

  obj_const.animals.push("Fish");
  console.log(obj_const);

  // obj_const = {}
  // console.log(obj_const);
}

function main() {
  console.log("\n1\n");
  objets();
  
  console.log("\n2\n");
  assign_fn();
  
  console.log("\n3\n");
  array_of_objects();
  
  console.log("\n4\n");
  copy_obj();
  
  console.log("\n5\n");
  const_obj_fn();
}

if (require.main === module) {
  main();
}