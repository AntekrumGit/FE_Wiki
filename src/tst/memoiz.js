function myMemoization(fn , context){
    const res = {};
    return function (...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache]
    }
} 

const clumsyProd = (num1, num2) => {
    for(let i = 0; i <= 10000 ;  i++ ){}
    return num1 * num2
}

const memoizedClumzyProd = myMemoization(clumsyProd);

console.time("first time")
console.log(memoizedClumzyProd(9766, 7562))
console.timeEnd("first time")

console.time("second time")
console.log(memoizedClumzyProd(9766, 7562))
console.timeEnd("second time")