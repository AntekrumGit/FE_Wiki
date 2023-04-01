//interface vs type
interface sumA {
    (a: number, b: number): number; //functions
}

type sumB = (a: number, b: number) => number;

const sumFN: sumA = (a, b) => a + b;

//интерфейс МОЖЕТ наследоваться (extend) от типа

// различия: только в ТИПЕ есть возможност сделать АЛИАС для ПРИМИТИВА значения
type MyUniqUd = string; // делаем алиас и теперь мы можем его изспользовать для более понятного указания типа  (не просто "стринг" или намбер)
interface User {
    id: MyUniqUd;
}
type UserType = {
    id: MyUniqUd;
};

//для Алиаса обьектов можно и тип и интерфес, только запись в типе лаконичнее
type NamesA = string[];
interface NamesB {
    [key: number]: string;
}

//только в ТИПЕ можно описать тип кортежа,в ИФ невозможно
type Kortej = [number, (n: number) => void];
const k: Kortej = [2, (n) => {}];

//только в ТИПЕ можно использовать ЮНИОН, в интерфейсе не только невозможно, а еще нельзя и экстендиться от типа который определяет ЮНИОН
type A = { name: string };
type B = { age: number };
type C = A | B; // => ЮНИОН , где может быть или нейм или адж ИЛИ!! и нейм и эйдж

// interface I extends A | B {} // невозможно
// interface I extends С {} // невозможно
interface I extends A, B {} // только так, но тогда обязательны ОБА поля

//ТИПЫ в отличии от ИФ не могут быть обьявлены несоклько раз, а ИНФ дополнится или если поле существует перезатрет предыдущий

//И - описание доменной логики приложения и обьектов по АПИ, Т - для взаемодействия с полученными интерфесами
//Интерфесы отвечают за логику приложения, а ТИПЫ описывать поведенческие моменты
