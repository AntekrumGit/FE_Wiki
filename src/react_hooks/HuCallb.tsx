import React from 'react';
import { useCallback, useState } from 'react';

function Inner({ fnProps }: { fnProps: (val: number) => void }) {
    console.log('Inner render');
    return (
        <>
            <button onClick={() => fnProps(5)}>InnerButton</button>
        </>
    );
}

const MemoisInner = React.memo(Inner);

export default function HuCallb() {
    const [theme, setTheme] = useState('dark');
    const [value, setValue] = useState(1);

    function handleToUpdateValue() {
        setValue((prev) => prev + 1);
    }
    // const handleToUpdateValue = useCallback(() => {
    //     return setValue((prev) => prev + 1);
    // }, []);

    const handleToUpdateValueWith = useCallback((incrementor: number) => {
        return setValue((prev) => prev + incrementor);
    }, []);

    return (
        <div style={{ backgroundColor: theme === 'dark' ? 'blue' : 'yellow' }}>
            <input
                value={value}
                type='number'
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
                onClick={() =>
                    setTheme((prev) => (prev === 'dark' ? 'bright' : 'dark'))
                }
            >
                Change Theme
            </button>
            {/* <Inner fnProps={handleToUpdateValue} /> */}
            <MemoisInner fnProps={handleToUpdateValueWith} />
        </div>
    );
}

//Основная идея в передаче функции как Пропс
//Сам useCallback не останавливает ре-рендера внутреннего компонента если внутренний компонент не оббернут в React.memo
//!ИЛИ! внутр компонент не оббернут в React.memo НО внутри него есть useEffect который следит за изменением пропсов и по их изменению вызывает свой внутренний setState
//Использование useCallback в связке с React.memo выключает ререндер внутреннего компонента если не указаны пропс за которыми следит useCallback
//Такая связка дает возможность передавать доп аргументы в переданную как пропс функцию и все равно не вызывать ререндер, так как
//передается одна и таже ссылка на функцию, не подверженная изменениям при изменениях ее аргументов или рендера родительского компонента
