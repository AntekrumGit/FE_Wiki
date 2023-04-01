
// class FamilyCellNode{
//     constructor(mother, father){  
//         this.mother = mother
//         this.father = father
//         this.status = "married"
//         this.custody = null
//         this.children = []
//     }
// }

// class Person {
//   constructor(id, name, gender) {
//     this.id = id;
//     this.name = name;
//     this.gender = gender;
//     this.fcell = []
//   }
// }

class Node {
    constructor(data){
        this.data = data
        this.cellParents = null
        this.children = []
        this.custody = null
        this.status = "married"
    }
}

class Person {
    constructor(id, name, parentId) {
      this.id = id;
      this.name = name;
      this.parentId = parentId
    }
  }

class Tree {

    constructor(){
        this.root = null
    }

    addChild(person){
        const node = new Node(person)
        const parentNode = person.parentId ? this.findNode(person.parentId) : null 

        if(parentNode){
            parentNode.children.push(node)
            console.log(`Node ${parentNode.data.name} with  childrens ${JSON.stringify(parentNode.children)}`)
        }else{
            if(!this.root){
                this.root = node
            }else {
                console.log("Its arleady root")
            }
  
        }
    }

    findNode(parentId){
        console.log(`Looking for${parentId}`)
        let _node = null
        this.traverse((node) => {
            if(node.data.id === parentId){
                _node = node
            }
        })
        console.log(`Founded ${_node} with name ${_node.data.name}}`)
        return _node
    }

    traverse(cb){
        const queue = [this.root]
        if(cb){
            while (queue.length){
                const currentNode = queue.shift()
                cb(currentNode)
                for(const child of currentNode.children){
                    queue.push(child)
                }
            }
        }

    }

    goingDeep(node, level = 0 ){
        console.log(`${"\t".repeat(level)}${node.data.name} | ${level}`)
        const sr = node.children
        for(let node of sr){
             this.goingDeep(node, level + 1)   
        }
    }



}

const tree = new Tree()
const mary = new Person(1, "Marry", null)
const bob = new Person(2, "Bob", 1)
const dilan = new Person(3, "Dilan", 1)

const lola = new Person(6, "Lola", 2)
const suzi = new Person(4, "Suzy", 3)
tree.addChild(mary) 
tree.addChild(bob) 
tree.addChild(dilan) 
tree.addChild(suzi) 
tree.addChild(lola) 

// tree.traverse((node, level)=>{
//     console.log(`Level ${level}: ${JSON.stringify(node.data.name)}`)
// })

tree.goingDeep(tree.root)
