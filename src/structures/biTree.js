class Node {
    left = null;
    right = null;
    constructor(val) {
        this.value = val;
    }
}

class Moderator {
    root = null;
    addNode(nodeValue) {
        const newNode = new Node(nodeValue);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.findCorrectLayer(newNode, this.root);
        }
    }
    findCorrectLayer(node, layer) {
        if (layer.value < node.value) {
            if (!layer.right) {
                layer.right = node;
            } else {
                this.findCorrectLayer(node, layer.right);
            }
        }
        if (layer.value > node.value) {
            if (!layer.left) {
                layer.left = node;
            } else {
                this.findCorrectLayer(node, layer.left);
            }
        }
    }

    traverce(node = this.root) {
        if (node == null) return;
        console.log(node.value);
        node?.left && this.traverce(node.left);
        node?.right && this.traverce(node?.right);
    }

    bsf(node = this.root) {
        if (this.root === null) return;

        const queue = [node];
        let queuePosition = 0;

        while (queue.length > queuePosition) {
            const currentLayer = queue[queuePosition];
            console.log(currentLayer.value);

            if (currentLayer.left) {
                queue.push(currentLayer.left);
            }
            if (currentLayer.right) {
                queue.push(currentLayer.right);
            }
            queuePosition++;
        }
    }
}

const tree = new Moderator();
//60 > 40 > 80 > 50 > 30 > 90 > 70
tree.addNode(60);
tree.addNode(40);
tree.addNode(80);
tree.addNode(50);
tree.addNode(30);
tree.addNode(90);
tree.addNode(70);

// tree.traverce();
tree.bsf();
