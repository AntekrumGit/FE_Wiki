function AddNumbers(a: number, b: number) {
    return a + b;
}
const AddNumbersA = (a: number, b: number) => {
    return a + b;
};

const last = <T>(arr: Array<T> | T[]) => {
    return arr[arr.length - 1];
};

// interface HelloProps{ name: string}
// const HelloWorld: React.FC<HelloProps> = ({name}) => {}

/* function HOC1<WP extends { hiphop: number }>(
    WrappedComponent: ComponentType<WP>
) {
    return (props: WP) => {
        return (
            <div>
                <WrappedComponent {...props} hiphop={10} />
            </div>
        );
    };
}

type C1PropsType = {
    title: string;
    hiphop: number;
};

const C1: React.FC<C1PropsType> = (props) => {
    return <div>{props.title}</div>;
};

const C1Container = HOC1(C1); */
