//FN args
function someFN(args) {
    //нормально только если передавать/ожидать или 1аргумент или структуру, например массив или обьект
    console.log(args); //только первый(один) элемент, даже если аргументов много Н: someFN(44,67,98,13) ==> 44, но если передать н. массив Н: someFN([44,67,98,13]) ==> [44,67,98,13]
    //ARGUMENTS (object! not array)
    console.log(arguments); //someFN(1,2,3) ==> [Arguments] { '0': 1, '1': 2, '2': 3 } || someFN([1,2,3]) ==> [Arguments] { '0': [ 1, 2, 3 ] }
    console.log(Array.isArray(arguments)); //FALSE but!!!
    console.log(...arguments); // someFN(1,2,3) ==>   [ 1, 2, 3 ] || someFN([1,2,3]) ==>   [ 1, 2, 3 ]
}
//чтобы ожидать аргументы которые передаются через ","
function someFNArgs(...args) {
    console.log(args); //будет выведены все аргументы оббернут в массив Н: someFNArgs(44,67,98,13) ==> [44,67,98,13]
    //ARGUMENTS (object! not array)
    console.log(arguments); //someFNArgs(1,2,3) ==> [Arguments] { '0': 1, '1': 2, '2': 3 } || someFNArgs([1,2,3]) ==> [Arguments] { '0': [ 1, 2, 3 ] }
    console.log(Array.isArray(arguments)); //FALSE but!!!
    console.log(...arguments); //someFNArgs(1,2,3) ==> 1 2 3 || someFNArgs([1,2,3]) ==> [ 1, 2, 3 ]
}

// someFN(1)
// someFN(1,2,3)
// someFN([1,2,3])

// someFNArgs(1)
// someFNArgs(1,2,3)
// someFNArgs([1,2,3])

//Если функция ожидает один аргумент
//Если мы хотим получить массив из аргументов которые передаются через запятую тогда в обьявлении фун-ии нужен спред
//Если хотим получить аргументы без обращения к переменно аргументов, тогда слово arguments = отдает массив
