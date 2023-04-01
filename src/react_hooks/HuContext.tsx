import React, { createContext, useState, useContext, useReducer } from 'react';
//https://www.youtube.com/watch?v=MpdFj8MEuJA&ab_channel=JackHerrington //React Context Vs React Reducer Vs StateManager(aka Zustland)
// ФАЙЛ - TSX СТРУКТУРА - context -> NameContext.tsx
//it's better only to wrap the code that needs the data since every update will re-render the provider's children
// #1 Контекст с одним значением (простой)
// #2 Контекст с несколькими значением (более сложный используя юзРедьюсер)

// #1 Контекст с одним значением (простой)
const CounterContext = createContext(null);

// export const ThemeProvider: FC = ({ children })
const ContextProvider = ({ children }) => {
    return (
        <CounterContext.Provider value={useState(0)}>
            {children}
        </CounterContext.Provider>
    );
};

function BtnLayer() {
    const [_, setValue] = useContext(CounterContext);
    return (
        <div>
            <button onClick={setValue((prev) => prev + 1)}>Add Value</button>
        </div>
    );
}
function ValueLayer() {
    const [value, _] = useContext(CounterContext);
    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
}

function HuContext() {
    return (
        <div>
            <BtnLayer />
            <ValueLayer />
        </div>
    );
}

export default HuContext;

//createContext
//wrap fn of children with create context provider + init value of context
//useContext(nameOfCreatedContext)
//может быть использован как для врапа всего Апп, так и для отдельных ветвей дерева (компонентов)
//!! При этом если продублировать компоненты с одинаковым контекстом, у них будет свое (разное/независимое) состояние значения передаваемого контекстом
//Обычно в контекст передают одно значение (стринг, булеан, обьект или аррей), если нужно что-то сложнее, то подойдет useReducer и его можно вставить в передаваемое значение контекста

// #2 Контекст с несколькими значением (более сложный используя юзРедьюсер)

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'subtract':
            return state - 1;
        default:
            return state;
    }
};

const CounterContextWithReducer = createContext(null);

const ContextReducerProvider = ({ children }) => {
    return (
        <CounterContext.Provider value={useReducer(reducer, 0)}>
            {children}
        </CounterContext.Provider>
    );
};

function BtnLayerRdc() {
    const [_, dispatch] = useContext(CounterContextWithReducer);
    return (
        <div>
            <button
                onClick={dispatch({
                    type: 'add',
                })}
            >
                Add Value
            </button>
        </div>
    );
}
function ValueLayerRdc() {
    const [value, _] = useContext(CounterContextWithReducer);
    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
}

export function HuContextRdc() {
    return (
        <div>
            <BtnLayer />
            <ValueLayer />
        </div>
    );
}

//изначально нужно завести функцию редюьсер с экшенами для манипуляцией с состояниями
//юзРедьюсер нужна функция редюьсер и первоначальное состояние
//в контекст провайдере все тоже самое, только вместо юзСтейта, в валью юзРедьюсер, он тоже отдает кортеж [value, dispatcher]
//внутри компонента используем велью из кортежа и диспатч для вызова экшена
