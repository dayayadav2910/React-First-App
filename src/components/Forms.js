import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Form(props) {

  const [text, setText] = useState(""); // It will return two parameters text and setText;
  console.log(useState("Enter Text2"));

  // setText(
  //   text.toUpperCase()
  // )

  const toUpperValue = () => {
    // text.toUpperCase()
    // console.log("Function is called");
    const value = text.toUpperCase()
    setText(value)
    props.showAlert("Converted to Uppercase","Success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const toLowerValue = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to Lowercase","Success")
  }
  const toClearValue = () => {
    let clear_value = ''
    setText(clear_value)
    props.showAlert("Values are cleared","Success")
  }
  const tocopyValue = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Values are copied","Success")
  }
  const tosearchValue = () => {
    let value
    if (text ===''? alert("Please Enter String in TextArea") : value = prompt("Enter any value that you want to search") )
    if(text === ''){
      alert("Please Enter String in TextArea")
    }
    else if(value === ''){
      alert("Please Enter character which you want to search")
    }
    else
    {
      let search_value = text.search(value)
      setText(" Values " + search_value + " Index")
      props.showAlert("Values is found","Success")
    }
  }
  return (
    <>
      <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{BackgroundColor: props.mode=== 'dark'?'grey':'white', 
          color: props.mode === 'dark'?'white':'light'
        }} id="exampleFormControlTextarea1" rows="8" ></textarea> 
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={toUpperValue} >Lower To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={toLowerValue} >Uppercase Lower To</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={toClearValue} >Clear values</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={tosearchValue} >Search values</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={tocopyValue} >Copy values</button>

      </div>
      <br />
      <div className="conatiner" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=> {return element.length!=0}).length} Word and Characters are {text.length}</p>
        <h3>Preview</h3>
        <p>{text}</p>
        <p>Time to count values {0.008 * text.length}</p>

      </div>




    </>
  );
}
