function deepEquals(valueOne, valueTwo) {
    //types
    if (typeof valueOne !== typeof valueTwo) return false;
    //nulls (objects)
    if (valueOne === null && valueTwo === null) return true;
    if (valueOne === null || valueTwo === null) return false;
    //primitives
    if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
        const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number';
        const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === 'number';

        if (isValueOneNaN && isValueTwoNaN) return true;
        return valueOne === valueTwo;
    }

    //LINK comparison ==> performance Array: const a = new Array(10000).fill("a") => deepEquals(a,a)
    if (valueOne === valueTwo) return true;
    //ARRAY
    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
        if (valueOne.length !== valueTwo.length) return false;
        for (let i = 0; i < valueOne.length; i++) {
            if (!deepEquals(valueOne[i], valueTwo[i])) return false;
        }
        return true;
    }
    //Array&Object
    if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

    //OBJECT
    const valueOneKeys = Object.keys(valueOne);
    const valueTwoKeys = Object.keys(valueTwo);
    if (valueOneKeys.length !== valueTwoKeys.length) return false;
    //if obj1 has key with value undefind && obj2 dont have such key at all (undefind, undefind)
    if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;

    for (let i = 0; i < valueOneKeys.length; i++) {
        const key = valueOneKeys[i];
        const valueOneValue = valueOne[key];
        const valueTwoValue = valueTwo[key];
        if (!deepEquals(valueOneValue, valueTwoValue)) return false;
    }
    return true;
}

console.log(deepEquals(1, 1));
console.log(deepEquals(true, true));
console.log(deepEquals('null', 'null'));
console.log(deepEquals(null, null));
console.log(deepEquals(isNaN, isNaN));
console.log(deepEquals(undefined, undefined));
console.log(deepEquals([], []));
console.log(deepEquals([123, 567, 333], [123, 567, 333]));
console.log(
    deepEquals(
        [1, 2, [5, 8, 9], [44, 15, [88, 77]]],
        [1, 2, [5, 8, 9], [44, 15, [88, 77]]]
    )
);
console.log(deepEquals({}, {}));
console.log(deepEquals({ a: 13, b: 14 }, { a: 13, b: 14 }));
console.log(
    deepEquals(
        { j: 8, h: true, b: [1, '2', 3], l: { o: 44, u: 4 } },
        { j: 8, h: true, b: [1, '2', 3], l: { o: 44, u: 4 } }
    )
);
console.log('-----FALSE');
console.log(deepEquals(1, 2));
console.log(deepEquals(true, false));
console.log(deepEquals('null', 'nul'));
console.log(deepEquals(null, 8));
console.log(deepEquals(null, 'undefind'));
console.log(deepEquals(isNaN, 'isNaN'));
console.log(deepEquals(undefined, 'undefined'));
console.log(deepEquals([], [1]));
console.log(deepEquals([123, 567, 333], [13, 567, 333]));
console.log(
    deepEquals(
        [1, '2', [5, 8, 9], [44, 15, [88, 77]]],
        [1, 2, [5, 8, 9], [44, 15, [88, 77]]]
    )
);
console.log(deepEquals({}, { l: 13 }));
console.log(deepEquals({ a: 13, b: '14' }, { a: 13, b: 14 }));
console.log(
    deepEquals(
        { j: 8, h: 9, b: [1, 8, 3], l: { o: 44, u: 4 } },
        { j: 8, h: 9, b: [1, 2, 3], l: { o: 44, u: 4 } }
    )
);
