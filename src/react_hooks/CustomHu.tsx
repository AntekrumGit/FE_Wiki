import React, { ReactElement, useEffect, useRef, useState } from 'react';

function TestLab() {
    const [value, setValue] = useState(0);

    console.log('TestLab rendered');

    const cl = useClients(value);

    console.log('TestLab AFTER cl');

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => setValue((prev) => prev + 1)}>
                ValueBTN
            </button>
            <h5>{cl}</h5>
        </div>
    );
}

export default TestLab;

function useClients(value: number) {
    const [clients, setClients] = useState<number[]>([]);
    const [fakeClients, setFakeClients] = useState<number[]>([]);

    console.log('useClients render with value', value);

    useEffect(() => {
        console.log('useClients USEEFFECT');
        setClients([value + 1, value + 2, value + 3, value + 4]);
    }, [value]);

    // useEffect(() => {
    //     console.log('useClients USEEFFECT');
    //     setClients([1, 2, 3, 4]);
    // }, []);

    return fakeClients;
}

//кастомные хуки - это обычная функция, которая выстреливает каждый ре-рендер родительского компонента
//юзЭффект в кастомном хуке - ассинхронный, будет выполнен только после ререндера родительского компонента (вставки в ДОМ)
//если юзЭффект внутри вызывает функцию setState то родительский компонент будет ре-рендериться (даже если он не меняет отдаваемые кастомным хуком в родительский элемент значения)

// TestLab rendered
// TestLab.tsx:30 useClients render with value 1
// TestLab.tsx:11 TestLab AFTER cl
// TestLab.tsx:33 useClients USEEFFECT
// TestLab.tsx:7 TestLab rendered
// TestLab.tsx:30 useClients render with value 1
// TestLab.tsx:11 TestLab AFTER cl
