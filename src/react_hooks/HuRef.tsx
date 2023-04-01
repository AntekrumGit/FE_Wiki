import React from 'react';

function HuRef() {
    return <div>HuRef</div>;
}

export default HuRef;

//1: когда хотим сохранить состояние между рендерингами при этом не вызывая ререндеринг (если хотим вызвать ререндеринг, то используем useState)
//2: когда хотим обратиться к домЭлементу напрямую (напр для фокуса: inputRef.current.focus())
//3: когда хотим получать значение предыдущего стейта

// Допустим задача: посчитать рендер компонента, мы ставим сетСтейт на кол-во рендеров, и юзЭффект без зависимостей, тогда он будет запускаться
// каждый рендер плюс добавляем в этот юзЭффект сетСтейт на каждый рендер, на изменение этого велью, тогда попадаем в инфинити луп, так как
// каждое изменение юзЭфекта вызывает сетСтейт, а изменение стейта вызывает юзЭффект

// тоесть так как суть сетСтейт вызывать рендеринг при каждом его изменении. не очень хорошей идеей также является вынос переменной за пределы компонента

//useRef тоже создает состояние, но не приводит к рендерингу при его изменении
//он возращает изначально обьект const refInsides = {current: null} тоже самое как const refInsides = useRef() кроме того что состояние возвращ. обьекта не меняется при каждом рендеренге

//когда хотим получать значение предыдущего стейта
// const [count, setCount] = useState(0);
// const prevCountRef = useRef();
// useEffect(() => {
//   prevCountRef.current = count;
// });
// const prevCount = prevCountRef.current;

//useEffect is asynchronous
//если оставить его без аргументов (на каждый рендер), то так как это колбэк, он будет выстреливать только после рендера (вставки в ДОМ)
//а так как юзРеф не приводи к ререндеру, то значение переменной prevCount не будет перезаписано, хоть prevCountRef.current будет изменена
//
//https://sam-does-code.medium.com/useref-example-capturing-previous-state-a7a25fc334df
//
//Refs provide a way to access DOM nodes or React elements created in the render method. - React Documentation
//Ref is not something monitored by React lifecycle(ref is not affected by rerenders at all only to changes itself)
