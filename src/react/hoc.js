//www.youtube.com/watch?v=KWT8OKzrMZ4
//https://codesandbox.io/s/keen-montalcini-thnd8?file=/src/hoc/withApp.jsx

https: export default function App() {
    return (
        <div className='App'>
            <WrappedDisplay count={6} list={[1, 2]} />
        </div>
    );
}

//simple component
function Display({ count, color, list }) {
    return (
        <div>
            <h1 style={{ color }}>{count}</h1>
            <p>{list.toString()}</p>
        </div>
    );
}

//HOC(accept component +/or return component) name starts "with..."
function withDisplay(Component) {
    return (props) => {
        const { list, ...otherProps } = props; //вычленяем пропсы для последующей обработки/модификации
        const modifyedList = [...list, 777]; //модифицируем переданные элементы
        const color = 'red'; //добавляем новые элементы

        return <Component color={color} list={modifyedList} {...otherProps} />;
    };
}

//wrapper HOC
const WrappedDisplay = withDisplay(Display);
