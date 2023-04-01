//CREATION AND SETTING
const myMap = new Map();
myMap.set(12, 'Twelve');
myMap.delete(12);
//or
const myMap2 = new Map(
    Object.entries({
        key: 'value',
        keyTwo: 'valueTwo',
    })
);

//TS
// const makeMap = <V = unknown>(obj: Record<string, V>) =>
//   new Map<string, V>(Object.entries(obj))

// const myMap = makeMap({ key: 'value' })
// // => Map<string, string>

//ITERATION
for (const [key, value] of myMap) {
}
for (const value of myMap.values()) {
}
for (const key of myMap.keys()) {
}

// CLONNING
const deepCopy2 = new Map(myMap); //shallow
// const deepCopy = structuredClone(myMap); //deepclone

//CONVERTING to/from object
const myObj = Object.fromEntries(myMap);
const myMapFromObj = new Map(Object.entries(myObj));

//Useful FN
myMap2.clear(); // Clear a map entirely
myMap2.size(); // Get the size of the map
myMap2.keys(); // Iterator of all map keys
myMap2.values(); // Iterator of all map values

//SERIALIZING
// JSON.stringify(obj, (key, value) => {
//     // Convert maps to plain objects
//     if (value instanceof Map) {
//       return Object.fromEntries(value)
//     }
//     // Convert sets to arrays
//     if (value instanceof Set) {
//       return Array.from(value)
//     }
//     return value
//   })

// const test = { set: new Set([1, 2, 3]), map: new Map([["key", "value"]]) }
// JSON.stringify(test, replacer)

// JSON.parse(string, (key, value) => {
//     if (Array.isArray(value)) {
//       return new Set(value)
//     }
//     if (value && typeof value === 'object') {
//       return new Map(Object.entries(value))
//     }
//     return value
//   })

// function replacer(key, value) {
//     if (value instanceof Map) {
//       return { __type: 'Map', value: Object.fromEntries(value) }
//     }
//     if (value instanceof Set) {
//       return { __type: 'Set', value: Array.from(value) }
//     }
//     return value
//   }

//   function reviver(key, value) {
//     if (value?.__type === 'Set') {
//       return new Set(value.value)
//     }
//     if (value?.__type === 'Map') {
//       return new Map(Object.entries(value.value))
//     }
//     return value
//   }

//   const obj = { set: new Set([1, 2]), map: new Map([['key', 'value']]) }
//   const str = JSON.stringify(obj, replacer)
//   const newObj = JSON.parse(str, reviver)

// https://www.builder.io/blog/maps

// class Map {
//     constructor() {
//       this.map = {}; // internal key/value object
//       this.trackerKey = Symbol();
//     }

//     set(key, value) {
//       let lookupKey = key[this.trackerKey];
//       if (!lookupKey) {
//         lookupKey = Symbol();
//         key[this.trackerKey] = lookupKey;
//       }
//       this.map[lookupKey] = value;
//     }

//     has(key) {
//       return key.hasOwnProperty(this.trackerKey);
//     }

//     get(key) {
//       const lookupKey = key[this.trackerKey];
//       return this.map[lookupKey];
//     }

//     delete(key) {
//       const lookupKey = key[this.trackerKey];
//       delete key[this.trackerKey];
//       delete this.map[lookupKey];
//     }
//   }
