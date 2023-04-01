const str = 'hello_world-friend';
const res = str.replace(/(_|-)/g, '*'); //hello*world*friend
const res2 = str.replace(/(_|-)/g, (item) => {
    return `${item}${item}${item}`; //hello___world---friend
});
console.log(res);
console.log(res2);

//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// . - любой одиночный символ
// [ ] - любой из них, диапазоны
// [^ ] - отрицание последующего значение (не имеет)
// $ - конец строки
// ^ - начало строки
// \ - экранирование
// \d - любую цифру
// \D - все что угодно, кроме цифр
// \s - пробелы
// \S - все кроме пробелов
// \w - буква
// \W - все кроме букв
// \b - граница слова
// \B - не границ

// Квантификация
// n{4} - искать n подряд 4 раза
// n{4,6} - искать n от 4 до 6
// * от нуля и выше
// + от 1 и выше
// ? - нуль или 1 раз
//https://www.youtube.com/watch?v=_pLpx6btq6U&ab_channel=WebDev
