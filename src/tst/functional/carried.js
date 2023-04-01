function sum(a, b, c) {
    return a + b + c;
}

function mult(a, b, c) {
    return a * b * c;
}

const curry = (fn) => {
    const curried = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return (...args2) => curried(...args, ...args2);
    };
    return curried;
};

const curriedSum = curry(sum);
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));

// function curry2(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args);
//         }
//         return curried.bind(this, ...args);

//         // return function test(...newArgs){
//         //     return curried.apply(this, args.concat(newArgs))
//         // }
//     };
// }

// const curriedMulti = curry2(mult);
// console.log(curriedMulti(1, 2)(3));
//===================================================================
//bind отдает НОВУЮ функцию с указаным контекстом и заполненными аргументами
//главное тут, что аргументы сохраняются
function Intel(a, b) {
    //базовая функция с фиксированным колвом аргументов
    return a + b;
}

function st() {
    //возвращаем новую функцию (НО с логикой INTEL), сохраняя однин аргумент (без контекста)
    //Intel === Intel |==> true
    //Intel === Intel.bind(null) |==> false
    return Intel.bind(null, 5); //теперь сслыки на возвращенную фукцию и INTEL не равны, это посути другая ф-ия с функционалом Интела
}

function st2(fn) {
    //в приходящую функцию добавляем аргумент (к уже существующим если они там есть как тут)
    return fn.bind(null, 5);
}

const lll = st(); // lll становиться функцией хранящей один аргумент
console.log(st2(lll)()); //same => console.log(st2(st())());
