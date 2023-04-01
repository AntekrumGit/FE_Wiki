const formData = {
    fname: 'John',
    age: 20,
    id: 432,
};

type ValidationResultBool = {
    [key in keyof typeof formData]: boolean;
};

// type ValidationResultBool = {
//     fname: boolean;
//     age: boolean;
//     id: boolean;
// }

type ValidationResultKeys = keyof typeof formData;
// type ValidationResult = "fname" | "age" | "id"

type ValidationResultKeysAuto = typeof formData;
// type ValidationResultKeysAuto = {
//     fname: string;
//     age: number;
//     id: number;
// }

type Obj = {
    //SAME AS Record<string,number>
    [key: string]: number;
};
// const a: Obj = {
//     dff: 4,
//     rrr: 6
// }

////////b1
// type TimePeriodType = "1m" | "5m" | "1h" | "1w"

// interface TimePeriodData {
//     [key: TimePeriodType]: any[]; // Replace 'any' with the actual type of the array
// }
// //to solve error above, change to "IN"
// type StockDataTimeFramesType = {
//     [key in TimePeriodType]: any[];
// };
////////b1

declare function validate<T>(data: T): ValidationResultBool; //declare - it allows a developer to use an object declared elsewhere
declare function validate<T>(data: T): { [key in keyof T]: boolean }; //generics version
const r = validate(formData);

//GENERICS
interface State<T, K, U> {}
type State2<T, K, U> = {};
class State3<T, K, U> {}
function State4<T, K, U>() {}
const State5 = <T, K, U>() => {};

//интерфейс дженерик можно рассматривать как функцию, которую мы вызываем с определенным типом и она возвращает новую структуру с исползьванием переданного  типа

function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
const value = getValue({ name: 'Lora' }, 'name');

// function getKey<T extends object>( obj: T,value: T[keyof T]):keyof T | null
function getKey<T extends object, U extends keyof T>(
    obj: T,
    value: T[U]
): U | null {
    const key = (Object.keys(obj) as Array<U>).find((k) => obj[k] === value);
    return key || null;
}

const key = getKey({ name: 'Lora' }, 'Lor');
