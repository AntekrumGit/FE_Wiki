const mult2 = (x) => x * 2;
const add10 = (x) => x + 10;
const substr1 = (x) => x - 1;

const compose =
    (...fns) =>
    (value) =>
        fns.reduceRight((value, fn) => fn(value), value);

const pipe =
    (...fns) =>
    (value) =>
        fns.reduce((value, fn) => fn(value), value);

//compose goes from right to left
const resFromComp = compose(mult2, substr1, add10)(5); //|==> 28
//pipe goes from left to right
const resFromPipe = pipe(add10, substr1, mult2)(5); //|==> 28
