import React from 'react';

function HuState() {
    return <div>HuState</div>;
}

export default HuState;

// useState вызывать рендеринг при каждом изменении его значение (value)
//1
//useState работает АСИНХРОННО (два вызова useState подряд не увеличивает счетчик на 2, берется только один сетСтейт в одном цикле рендеринга, второй игнориться)
// чтоб решить это нужно пользоватся prevValue setCount(prev => prev +1)

//2
//елси мы не передаем изначальное состояние useState, а хотим его вычислить,тогда чтоб каждый раз не запускать ф-ю вычисления при рендеренге
// можно передавать функцю в useState ==> useState(()=>{return computeStateFunction()})

//3

//если мы используем стейт в виде обьекта, то если мы передаем туда новый обьект с измененным состоянием: setState({title: "newValue"}), он полностью заменит старый стейт, не сохраняя старые поля
//чтоб это изменить, нужно setState(prev => {return {...prev, title: "newValue"}})

// function useState(initState){
//     let _val = initState
//     let state = () => _val

//     function setState(v){
//         _val = v
//     }

//     return [state, setState]
// }

// const [value, setValue] = useState(0)
// console.log(value())
// setValue(5)
