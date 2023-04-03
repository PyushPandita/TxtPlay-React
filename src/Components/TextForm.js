import React, { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const TextForm = (props) => {

const [text, setText] = useState('');

//changes text to upper case
const upperCase =  () => {
  const newText = text.toUpperCase();
  // console.log(newText);
  setText(newText);
}

//changes text to lower case
const lowerCase =  () => {
  const newText = text.toLowerCase();        
  setText(newText);
}

//copy the text
const copyText = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}

//remove exter blank spaces
const remove =  () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

//clears all the text written inside the text area
const clear =  () => {
  setText('');
}


const handleOnChange = (event) => {
  // console.log("On change");
  setText(event.target.value)
}

  return (
    <>
      <div className="conatiner" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
              <label htmlFor="myBox" className="form-label" />
              <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? '#042743' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>

          <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={upperCase}>Convert to Uppercase</button> 
          <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={lowerCase}>Convert to Lowercase</button> 
          
        <CopyToClipboard text={text}
          onCopy={() => {console.log('Text Copied')}}>
          <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1'>Copy Text</button> 
        </CopyToClipboard>

          <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={remove}>Remove blank spaces</button> 
          <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clear}>Clear</button> 

      </div>

      <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} letters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  )
}

export default TextForm;
