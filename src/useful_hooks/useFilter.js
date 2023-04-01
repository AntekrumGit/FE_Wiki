// export function useFilter(items, filterProp) {
//     const [enteredSearchValue, setEnteredSearchValue] = useState("");
//     const activeSearchValue = useDebounce(enteredSearchValue, 300);

//     const availableItems = activeSearchValue
//       ? items.filter((item) =>
//           RegExp(activeSearchValue, "i").test(item[filterProp])
//         )
//       : items;

//     return {
//       enteredSearchValue,
//       setEnteredSearchValue,
//       availableItems
//     };
//   }

// EXA<PLE:
// export default function App() {
//     const items = [
//       {texta: "go on board"},
//       {texta: "let it sly"},
//       {texta: "only big mamas"},
//       {texta: "just do it"},
//    ]
//     const str = "let"
//     const filterProp = "texta"

//     const availableItems = str
//     ? items.filter((item) =>
//         RegExp(str, "i").test(item[filterProp])
//       )
//     : items;

//     return (
//       <div className="App">
//         {/* <Display count={6} color={"red"} list={[1,2]} /> */}
//         <h1 >{JSON.stringify(availableItems)}</h1>
//       </div>
//     );
//   }
