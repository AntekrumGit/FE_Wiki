//https://github.com/safak/youtube/blob/react-form/src/App.jsx // ===> https://www.youtube.com/watch?v=tIdNeoHniEY&ab_channel=LamaDev

//========================> GATHER ALL VALUES FROM FORM FIELDS using Ref
// function APP() {
//     const usernameRef = useRef();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(usernameRef.current) // unable only after pressing button
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <FormInput referer={usernameRef} placeholder='Username' />
//             <button>Submit</button>
//         </form>
//     );
// }

// function FormInput(props) {
//     return (
//         <div>
//             <input ref={props.refer}>{props.placeholder}</input>
//         </div>
//     );
// }

//========================> GATHER ALL VALUES FROM FORM FIELDS using FormData
// function APP(){
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const data = new FormData(e.target);
//         Object.fromEntries(data.entries());
//     };
// return(
//     <form onSubmit={handleSubmit}>
//         <FormInput name='username' placeholder='Username' />
//         <button>Submit</button>
//     </form>;
// )
// }

// function FormInput(props) {
//     return (
//         <div>
//             <input name={props.name}>{props.placeholder}</input>
//         </div>
//     );
// }
//========================> GATHER ALL VALUES FROM FORM FIELDS using ORDINARY (best way, full approach in github link above)
// const App = () => {
//     const [values, setValues] = useState({
//         username: '',
//     });
//     const inputs = [
//         {
//             id: 1,
//             name: 'username',
//             type: 'text',
//             placeholder: 'Username',
//             errorMessage:
//                 "Username should be 3-16 characters and shouldn't include any special character!",
//             label: 'Username',
//             pattern: '^[A-Za-z0-9]{3,16}$',
//             required: true,
//         },
//     ];
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     const onChange = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value });
//     };

//     return (
//         <div className='app'>
//             <form onSubmit={handleSubmit}>
//                 <h1>Register</h1>
//                 {inputs.map((input) => (
//                     <FormInput
//                         key={input.id}
//                         {...input}
//                         value={values[input.name]}
//                         onChange={onChange}
//                     />
//                 ))}
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// };

// const FormInput = (props) => {
//     const [focused, setFocused] = useState(false);
//     const { label, errorMessage, onChange, id, ...inputProps } = props;

//     const handleFocus = (e) => {
//       setFocused(true);
//     };

//     return (
//       <div className="formInput">
//         <label>{label}</label>
//         <input
//           {...inputProps}
//           onChange={onChange}
//           onBlur={handleFocus}
//           onFocus={() =>
//             inputProps.name === "confirmPassword" && setFocused(true)
//           }
//           focused={focused.toString()}
//         />
//         <span>{errorMessage}</span>
//       </div>
//     );
//   };
