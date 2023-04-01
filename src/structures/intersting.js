let pers = { name: 'John', age: 25 };

//clone obj
// window.structuredClone(pers)

//в reduce, если акк массив, мы либо сразу return acc.concat(val) или сначал делаем acc.push(val) затем return acc (связано с возвр значением пуш - длина, а у конкат - новый массив)

//Преобразование объектов в примитивы
// obj[Symbol.toPrimitive](hint)

//Перебор свойств обьекта
// №1
// for(let[key, val] of Object.entries(pers)){
//     console.log(key);
// }
// №2
// for(let pr in pers ){ // не для массива, так как перебирает не индексы массива, а перечислимые свойства объекта. (только для разряженых массивов)
//     res += pers[pr]
// }

//Перебор свойств массива (кроме классики фор и форич)
// №1
// for (val of a) { // неявно вызывает итератор
//     console.log(val);
// }
// №2 // явно вызывает итератор
// var a = ["a", "b", "c"];
// var it = a.entries();
// var entry;
// while (!(entry = it.next()).done) {
//     console.log(entry.value[1]);
// }

//Наследование от обьекта без функции конструктора 2 способа
//let animal = {eats: true}
//1)let ca = {__proto__: animal} <==> 2)let ca = Object.create(animal)

//Проверка полей обьекта
// log(typeof pers.two === 'undefined') // тут как строка анефанд
// log(pers.two === undefined) // тут как обьект анефанд

//замыкание может вернуть обьект, а не только функцию
// function ar(number){
//     return {
//         mult: function(n2){return number * n2},
//         plus: function(n2){return number + n2}
//     }
// }
// const ff = ar(5);
// log(ff.mult(5))
// log(ff.plus(5))

//===================================Object creation ====================================================================
// функция как фабрика обьектов (класс в js - это синтаксический сахар над функцией)
function fOne(a) {
    this.a = a;
    this.fn = function () {
        return this.a;
    };
}
const fo = new fOne(2);

//object запись ключей только "чистыми", ссылки можно на ключи ТОЛЬКО через this (нельзя написать с: a)
//функции можно писать лямдами или через слово функция
//this равен самому обьекту, тоесть если вернуть this из функции, то можно сделать цепочку вызовов, так как каждый раз
//будет отаваться не результат выполнения функции, а сам обьект, у которого можно вызвать другие функции
const oOne = {
    a: 12,
    b: this.a,
    c: this.b,
    fn: () => {}, // вариант создание функции 1
    fn2: function () {}, // вариант создание функции 2
    fn3() {}, //вариант создание функции 3 (без двоеточий)
    fn4: function () {
        // если вернуть то можно this сделать цепочку вызовов
        this.a = 17;
        return this;
    },
};

console.log(oOne.fn3().a); //цепочка вызовов (может быть бесконечна пока функции возвращают this)

//class
//field declaration NO THIS
class cOne {
    a; // no this alowed
    b; // no this alowed
    c = 12;
    //d can be declared in constructor
    constructor(a, b, d) {
        this.a = a;
        this.b = b;
        this.d = d;
    }
    // Getter
    get area() {
        // при вызове Геттера вызывать не как функцию а как поле!! => console.log(clOne.area) //clOne.area() не сработает!!!
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.a * this.b;
    }
}

const clOne = new cOne(3, 4);
console.log(clOne.a);

//!!!!!!путаю с созданием обычной функции:
const confuse0 = () => {
    let a = 12;
    const b = () => {};
};

function confuse() {
    let a = 12;
    const b = () => {};
    return a;
}

const aa = new confuse(); // вернет пустой обьект {} без ничего

console.log(aa); //|==> {}
console.log(aa.a); //|==> undefined
