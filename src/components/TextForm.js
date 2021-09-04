import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase","success");
    }

    const handlelowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myform" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length)} minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something to preview."}</p>
            </div>
        </>
    )
}
