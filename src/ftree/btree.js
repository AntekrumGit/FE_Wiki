const female = "FEMALE";
const male = "MALE";

const fathersCustody = "WITH_FATHER";
const mothersCustody = "WITH_MOTHER";

const married = "MARRIED";
const divorced = "DIVORCED";

class FamilyCellNode {
  constructor(mother, father) {
    this.mother = mother;
    this.father = father;
    this.status = married;
    this.custody = null;
    this.children = [];
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.familyCell = [];
  }
}

class Person {
  constructor(id, name, gender) {
    this.id = id;
    this.name = name;
    this.gender = gender;
  }
}

class FamilyTree {
  constructor() {
    this.root = null;
  }

  createFamily(mother, father) {
    if (!this.root) {
      const fatherNode = new Node(father);
      const motherNode = new Node(mother);
      const familyNode = new FamilyCellNode(motherNode, fatherNode);

      motherNode.familyCell.push(familyNode);
      fatherNode.familyCell.push(familyNode);

      this.root = familyNode;
    } else {
      console.log("The Family is Already EXISTS");
    }
  }

  getMarry(familyPersonId, newPerson) {
    const newPersonNode = new Node(newPerson);
    const findedCouple = this.findPersonInFamily(familyPersonId);

    if (!findedCouple) {
      console.log("No such Person from the Tree was found");
      return;
    }

    const compatibility = this.marrigeСompatibilityCheck(
      findedCouple.data.gender,
      newPerson.gender
    );
    if (!compatibility) {
      console.log("Feature is not implemented");
      return;
    }

    if (findedCouple?.familyCell.length) {
      const alreadyMarried = findedCouple.familyCell.find(
        (fs) => fs.status === "MARRIED"
      );
      if (alreadyMarried) {
        console.log(
          "Active marrige detected, cant provide new one without divorce"
        );
        return;
      }
    }

    const mother = newPerson.gender === "FEMALE" ? newPersonNode : findedCouple;
    const father =
      mother.data.id === newPerson.id ? findedCouple : newPersonNode;
    const newFamilyNode = new FamilyCellNode(mother, father);
    mother.familyCell.push(newFamilyNode);
    father.familyCell.push(newFamilyNode);
  }

  getDivorce(motherId, fatherId, custody) {
    const familyNode = this.findNode(motherId, fatherId);

    if (!familyNode) {
      console.log("No such familyNode founded...");
      return;
    }

    if (familyNode.status === "DIVORCED") {
      console.log("Already divorced");
      return;
    }

    familyNode.status = divorced;
    familyNode.custody = custody;

    const familyPerson = this.findFamilyPerson(familyNode);

    if (custody === "WITH_MOTHER" && familyPerson.data.gender !== "FEMALE") {
      familyPerson.familyCell = familyPerson.familyCell.filter(
        (rel) => rel.mother.data.id !== motherId
      );
    }
    if (custody === "WITH_FATHER" && familyPerson.data.gender !== "MALE") {
      familyPerson.familyCell = familyPerson.familyCell.filter(
        (rel) => rel.father.data.id !== fatherId
      );
    }
  }

  addChild(person, motherId, fatherId) {
    const node = new Node(person);
    const parentNode = this.findNode(motherId, fatherId);

    if (parentNode) {
      parentNode.children.push(node);
    } else {
      console.log("There are no parents");
    }
  }

  findFamilyPerson(familyNode) {
    const fatherId = familyNode.father.data.id;
    const motherId = familyNode.mother.data.id;

    const rootSearchResFather = this.searchInRoot(fatherId);
    const rootSearchResMother = this.searchInRoot(motherId);
    if (rootSearchResFather || rootSearchResMother) {
      return rootSearchResFather ? rootSearchResFather : rootSearchResMother;
    }

    let _person = null;
    this.traverse((node) => {
      if (node.children.length) {
        const searchRes = node.children.filter(
          (ch) => ch.data.id === fatherId || ch.data.id === motherId
        );
        if (searchRes.length) {
          _person = searchRes[0];
        }
      }
    });
    return _person;
  }

  findPersonInFamily(personId) {
    const rootSearchRes = this.searchInRoot(personId);
    if (rootSearchRes) {
      return rootSearchRes;
    }

    let _person = null;
    this.traverse((node) => {
      if (node.children.length) {
        const searchRes = node.children.find((ch) => ch.data.id === personId);
        if (searchRes) {
          _person = searchRes;
        }
      }
    });
    return _person;
  }

  searchInRoot(parentId) {
    const root = this.root;
    let person = null;
    if (root.father.data.id === parentId) {
      person = root.father;
    }
    if (root.mother.data.id === parentId) {
      person = root.mother;
    }
    return person;
  }

  findNode(motherId, fatherId) {
    let _node = null;
    this.traverse((node) => {
      if (
        node.father.data.id === fatherId &&
        node.mother.data.id === motherId
      ) {
        _node = node;
      }
    });
    return _node;
  }

  traverse(cb) {
    const queue = [this.root];
    if (cb) {
      while (queue.length) {
        const currentNode = queue.shift();
        if (currentNode) {
          cb(currentNode);
          for (let child of currentNode.children) {
            if (child.familyCell.length) {
              child.familyCell.forEach((fc) => queue.push(fc));
            }
          }
        }
      }
    }
  }

  marrigeСompatibilityCheck(person1Gender, person2Gender) {
    const compatArray = [person1Gender, person2Gender];
    const values = ["FEMALE", "MALE"];
    const check = values.every((value) => {
      return compatArray.includes(value);
    });
    return check;
  }

  showTree(node, level = 0) {
    console.log(
      `${"\t".repeat(level)}${node.father.data.name} & ${
        node.mother.data.name
      } ${node.status}| ${level}`
    );
    level += 1;
    for (let child of node.children) {
      console.log(
        `${"\t".repeat(level)}${child.data.name} (${
          child.data.gender
        }) | ${level}`
      );
      if (child.familyCell.length) {
        for (let fc of child.familyCell) {
          this.showTree(fc, level + 1);
        }
      }
    }
  }
}

const tree = new FamilyTree();

const mary = new Person(1, "Marry", female);
const bob = new Person(2, "Bob", male);
tree.createFamily(mary, bob);

const dilan = new Person(3, "Dilan", male);
const lola = new Person(6, "Lola", female);
tree.addChild(dilan, mary.id, bob.id);
tree.addChild(lola, mary.id, bob.id);

const suzi = new Person(4, "Suzy", female);
tree.getMarry(dilan.id, suzi);

const stiven = new Person(7, "Stiven", male);
tree.addChild(stiven, suzi.id, dilan.id);

const richard = new Person(8, "Richard", male);
tree.addChild(richard, suzi.id, dilan.id);

const james = new Person(9, "James", male);
tree.getMarry(lola.id, james);

//==> already divorsed test
// const kevin = new Person(222, "Kevin", male)
// tree.getMarry(lola.id, kevin)

// //==> not family custody test
// tree.getDivorce(suzi.id, dilan.id, mothersCustody)
//
tree.getDivorce(suzi.id, dilan.id, fathersCustody);
//

const nansy = new Person(10, "Nansy", female);
tree.getMarry(dilan.id, nansy);

const gretta = new Person(11, "Gretta", female);
tree.addChild(gretta, nansy.id, dilan.id);

tree.showTree(tree.root);
