global.name = 'Global';

function A() {
    const name = 'Aname';
    console.log('In A', this.name);

    function B() {
        const name = 'Bname';
        console.log('In B', this.name);
    }

    B();
}

console.log(A());

// ВЫЗОВ ФУНКЦИИ МЕТОДОМ ОБЬЕКТА (через точку)
// Есть разница в определении THIS у стрелочных и обычных функциях, даже при вызове с обьекта (через точку),
// стрелочная функция все равно не будет видеть выше своего скоупа (за пределами скобок самой стрелочной функции)
// как будто THIS у нее нет
// у ОБЫЧНЫХ фн - при вызове с обьекта (через точку)
const obj = {
    mapl: 'zeus',
    foo: () => {
        // !!!!!!!!!!!ARROW FN
        const self = this;
        const reggy = 'Bob';
        console.log('Foo mapl', this.mapl); // undefined
        console.log('Foo this', this); // {}
        console.log('Foo self', self); // {}
        console.log('Foo self', self.mapl); // undefined
        console.log('Foo reggy', reggy); // Bob
        //console.log('Foo mapl', mapl);//compilation error mapl not seen
    },
    unfoo() {
        // !!!!!!!!!!!ORDINARY FN
        const self = this;
        const reggy = 'Bob';
        console.log('Foo mapl', this.mapl); //zeus
        console.log('Foo this', this); // { mapl: 'zeus', foo: [Function: foo], unfoo: [Function: unfoo] }
        console.log('Foo self', self); // { mapl: 'zeus', foo: [Function: foo], unfoo: [Function: unfoo] }
        console.log('Foo self', self.mapl); // zeus
        console.log('Foo reggy', reggy); // Bob
        //console.log('Foo mapl', mapl);// compilation error mapl not seen
    },
};

// obj.foo();
// obj.unfoo();

// ВЫЗОВ У УБЬЕКТА, если МЕТОД === обычная функция, а внутри  САМОВЫЗЫВАЮЩЕЙСЯ ФУНКЦИИ
// Самое важно ГДЕ и КАК функция была вызвана, если через точку, обьекта, тогда она пренадлежит обьекту, если просто через измя и скобки (Н: self invouked Fn) даже в обьекте,
// то это глобальный обьект, но есть нюансы со стрелочными и обычными ф-иями
// Самовызванная ОБЫЧНАЯ фн - THIS - глобальный, поэтому свойства обьекта будут undefined
// почему СЕЛФ определяется ХЗ!!!
//
// Самовызванная СТРЕЛОЧНАЯ фн - THIS - тот обьект внутри которого она вызвана (нет сюрпризов) лексическое определение

const obj2 = {
    mapl: 'zeus',
    foo: () => {
        // !!!!!!!!!!!ARROW FN
        const self = this;
        const reggy = 'Bob';
    },
    unfoo() {
        // !!!!!!!!!!!ORDINARY FN
        const self = this;
        const reggy = 'Bob';
        const loop = 'Outside';

        (function selfI() {
            const loop = 'Inside';
            console.log('selfI mapl', this.mapl); // undefined
            console.log('selfI this', this); //Foo this <ref *1> Object [global] {global: [Circular *1],queueMicrotask: [Function: queueMicrotask],....}
            console.log('selfI self', self); // { mapl: 'zeus', foo: [Function: foo], unfoo: [Function: unfoo] }
            console.log('selfI self', self.mapl); // zeus
            console.log('selfI reggy', reggy); // Bob
            console.log('selfI loop', loop); // Inside
        })();

        const selfIArrow = () => {
            const loop = 'Inside';
            console.log('selfIArrow mapl', this.mapl); //zeus
            console.log('selfIArrow this', this); //{ mapl: 'zeus', foo: [Function: foo], unfoo: [Function: unfoo] }
            console.log('selfIArrow self', self); //{ mapl: 'zeus', foo: [Function: foo], unfoo: [Function: unfoo] }
            console.log('selfIArrow self', self.mapl); //zeus
            console.log('selfIArrow reggy', reggy); //Bob
            console.log('selfIArrow loop', loop); //Inside
        };
        selfIArrow();
    },
};

obj2.unfoo();

// ВЫЗОВ У УБЬЕКТА, если МЕТОД === СТРЕЛОЧНАЯ функция, а внутри САМОВЫЗЫВАЮЩЕЙСЯ ФУНКЦИИ
//Если внутри стрелочной функции

const obj3 = {
    mapl: 'zeus',
    foo: () => {
        // !!!!!!!!!!!ARROW FN
        const self = this;
        const reggy = 'Bob';
        const loop = 'Outside';

        (function selfI() {
            const loop = 'Inside';
            console.log('selfI mapl', this.mapl); // undefined
            console.log('selfI this', this); //Foo this <ref *1> Object [global] {global: [Circular *1],queueMicrotask: [Function: queueMicrotask],....}
            console.log('selfI self', self); // {}
            console.log('selfI self', self.mapl); // undefined
            console.log('selfI reggy', reggy); // Bob
            console.log('selfI loop', loop); // Inside
        })();

        const selfIArrow = () => {
            const loop = 'Inside';
            console.log('selfIArrow mapl', this.mapl); //undefined
            console.log('selfIArrow this', this); //{}
            console.log('selfIArrow self', self); //{ }
            console.log('selfIArrow self', self.mapl); //undefined
            console.log('selfIArrow reggy', reggy); //Bob
            console.log('selfIArrow loop', loop); //Inside
        };
        selfIArrow();
    },
    unfoo() {
        // !!!!!!!!!!!ORDINARY FN
        const self = this;
        const reggy = 'Bob';
        const loop = 'Outside';
    },
};

obj3.foo();
