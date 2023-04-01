//===========================#1

// function factorial(n) {
//     return n <= 1 ? 1 : factorial(n - 1) * n;
// }

// function timeCasheFactorialDecorator(factFunc) {
//     const cache = {};
//     return function (n) {
//         let startTime = performance.now();
//         let isCached = cache[n] === undefined ? 'false' : 'true';
//         let res;
//         if (cache[n] === undefined) {
//             res = factFunc(n);
//             cache[n] = res;
//         } else {
//             res = cache[n];
//         }

//         let resTime = performance.now() - startTime;
//         console.log(
//             `Function was ready in ${resTime} ms and result is ${res} in was cached: ${isCached}`
//         );

//         return res;
//     };
// }
// const tr = timeCasheFactorialDecorator(factorial);
// tr(20);
// tr(62);
// tr(32);
// tr(12);
// tr(62);
// tr(15);
// tr(62);
// tr(50);
// tr(12);

//===========================#2
//closure can return object not only functions
// function ar(number){
//     return {
//         mult: function(n2){return number * n2},
//         plus: function(n2){return number + n2}
//     }
// }
// const ff = ar(5);
// log(ff.mult(5))
// log(ff.plus(5))

//===========================#3
// we can decorate frough Proxy class in JS

const originalObject = {
    value: 'virginValue',
};

const proxy = new Proxy(originalObject, {
    get: function (target, prop, receiver) {
        if (prop === 'value') {
            console.log('Getting value field');
            return target[prop];
        }
        return Reflect.get(...arguments); //(args same === target, prop, receiver) orjust return target[prop];
    },
    set: function (target, prop, value) {
        if (prop === 'value') {
            if (value.length > 5) {
                throw new Error('length should be less or equel 5');
            }
        }
        target[prop] = value;
        return true;
    },
});

console.log(proxy.value);
