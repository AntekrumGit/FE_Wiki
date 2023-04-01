import React, {
    useEffect,
    useState,
    memo,
    useMemo,
    ChangeEventHandler,
} from 'react';

function Inner({ color }: { color: any }) {
    console.log('Rendered with color', color);
    return <></>;
}

const Memois = React.memo(Inner);

export default function HuMem() {
    const [color, setColor] = useState({ color: 'red' });
    // const [color, setColor] = useState('red');
    const [value, setValue] = useState('');
    const [isSettled, setIsSettled] = useState(true);
    //===============================================
    //#1
    //[Inner + States(primitive) = Render]
    //[Inner + #1(notState-primitive) = Render]
    //[memoizedInner + States(primitive) = NOT_Render]
    //[memoizedInner + #1(notState) = NOT_Render] BECOUSE PRIMITIVE ALWAYS COMPARED BY VALUE
    //#2
    //[Inner + States(object) = Render]
    //[Inner + #2(notState-object) = Render]
    //[memoizedInner + States(object) = NOT_Render]
    //[memoizedInner + #2(notState) = Render] !!!BECOUSE OBJECT ALWAYS NEW
    //#3
    //[Inner + MemoizedStates(object) = Render]
    //[Inner + #3(notState) = Render]
    //[memoizedInner + #3(notState) = NOT_Render] !!!BECOUSE WE ECRANIR OBJECT

    //===============================================
    //#1
    // let colorVariable = isSettled ? 'red' : 'blue';

    //#2
    // let colorVariable = {
    //     color: isSettled ? 'red' : 'blue',
    // };

    //#3
    // const colorVariable = useMemo(() => {
    //     return { color: isSettled ? 'red' : 'blue' };
    // }, [isSettled]);

    // const memColorState = useMemo(() => {
    //     return { color: color.color === 'red' ? 'silver' : 'grey' };
    // }, [color]);

    function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        setValue(value);
    }

    return (
        <>
            <input onChange={handleInputChange} type='text' value={value} />
            <button
                onClick={
                    () =>
                        // () => setColor((prev) => (prev === 'red' ? 'blue' : 'red'))
                        setColor((prev) =>
                            prev.color === 'red'
                                ? { color: 'blue' }
                                : { color: 'red' }
                        )
                    // setIsSettled((prev) => !prev)
                }
            >
                Color
            </button>
            <Memois color={color} />
            {/* <Inner color={memColorState} /> */}
        </>
    );
}

//1 дорогостоящая функция, которая не должна вызываться при каждом рендеренге (не будет вычисляться при изменении стейтов не указанного в зависимостях useMemo)
//2 обьект изменение которого приводит к ререндеру (так как каждый рендер создает новую ссылку на обьект)
//3 когда передаем обьект в пропсах мемоизированного компонента (не хотим его ререндер)

//useMemo - мемоизация Пропса VS React.memo - мемоизация компонента
//Отдельно useMemo - мемоизация Пропса используется если функция дорогостоящая и не должна вычисляться каждый рендер, если только не изменились какие-то филды или стейты
//Второе назначение передача переменной в пропсы внутреннего компонента чтоб он не ререндерился, тогда нужен useMemo + React.memo
//Вне зависимости от типа (примитив или обьект) в useState, если он передается в неМемоизКомпонент как пропс будет ре-рендер
//В мемоизированномКомпоненте, не важен тип пропсов (примитив или обьект) если они идут в useState он !НЕ будет ре-рендериться!
//Не мимозКомпоненты всегда ре-рендеряться, вне зависимости от типа передаваемых пропсов и даже при их мемоизации
//Мемоизированные компоненты ре-рендерятся только если меняется свойство пропсов или им передаются не мемоизированные обьекты-пропсы
// Нет смысла мемоизировать примитивов, так как он изначально не пере-создается при каждом рендере как это делает обьект (новая ссылка при кадждом рендере)
//===============================================

//react memo
// const MemoedSwatch = memo(Swatch, (prevProps, nextProps) => {
//     return prevProps.params.color === nextProps.params.color
// })
