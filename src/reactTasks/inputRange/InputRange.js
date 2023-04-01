import {useState} from 'react'

const inputStyle = {
    width: 400,
    margin: "20px",
    fontSize: '20px'
}

const InputRange = () => {

    const [value, setValue] = useState("0");

    const circleStyle = {
        width: "200px",
        height: "200px",
        margin: "20px 110px",
        backgroundImage: `conic-gradient(green, ${value}%, lightgreen 0)`,
        borderRadius: "50%"
    }

   function rangeChangeHandler (e) {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return(
        <>
            <input onChange={rangeChangeHandler} style={inputStyle} type="range" value={value}/>
            <div style={circleStyle}></div>
        </>
    )

}

export default InputRange