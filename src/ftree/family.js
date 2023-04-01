

const familyTree = [
    { id: 52, parentId: null, name: "familyRoot", gender: null },
    { id: 56, parentId: 52, name: "Bob", gender: "male" },
    { id: 57, parentId: 52, name: "Marry", gender: "female" },
    { id: 58, parentId: 57, name: "Richard", gender: "male" },
    { id: 59, parentId: 57, name: "John", gender: "male" },
]


const idMapping = familyTree.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
}, {});


let root;
familyTree.forEach((el) => {
  if (el.parentId === null) {
    root = el;
    return;
  }
  const parentEl = familyTree[idMapping[el.parentId]];
  parentEl.children = [...(parentEl.children || []), el];
});

console.log(root);

// class Person {
//   constructor(id, name, gender) {
//     this.id = id;
//     this.name = name;
//     this.gender = gender;
//   }
// }

// function createFamilyTree(motherId, motherName, fatherId, fatherName){
//    return null
// }


