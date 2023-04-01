const tree = {
    value: 1,
    children: [{
        value: 2,
        children: [{value: 3}]
    },{
        value: 4,
        children: [{value: 5},{value: 6}]
    }]
}

//recursion realization
function getTreeValuesRecurs(tree){
    const arrRes = [];

    if(tree.value){
        arrRes.push(tree.value)
    }

    if(tree.children){
        tree.children.forEach(element => {
            arrRes.push(getTreeValues(element))
        });
    }

    return arrRes.flatMap(el => el)
}

//stack realization
function getTreeValuesStack(tree){
    const stack = [tree]
    const result = []
    while(stack.length > 0){
        const node = stack.pop()

        if(node.value !== undefined){
            result.push(node.value)
        }

        if(node.children?.length){
            stack.push(...node.children)
        }
    }
    return result
}


// console.log(getTreeValues(tree));
// console.log(getTreeValuesStack(tree));
