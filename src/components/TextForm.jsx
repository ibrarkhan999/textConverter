import React, { useState } from "react";
import "./TextForm.css";
const TextForm = (props) => {
  const [text, setText] = useState("Enter Text Here...");
  const [copy, setCopy] = useState("");

  // to Upper case
  const toUpper = () => {
    setText(text.toUpperCase(text));
  };

  // to lower case
  const toLower = () => {
    setText(text.toLowerCase(text));
  };

  // access to user type
  const userChanges = (e) => {
    setText(e.target.value);
  };

  // first letter capital
  const capitalizeWords = () => {
    setText(
      text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  // clear
  const clear = () => {
   setText(()=> '')
  };

  // copy text
  const copyText = () => {
    setCopy(() => "Copied ");
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopy(() => "");
    }, 1000);
  };

  return (
    <>
      <div className="textContainer">
        <div className="mb-3">
          <p className="copy">{copy}</p>
          <label htmlFor="myBox" className="form-label">
            <h1> {props.heading} </h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={userChanges}
            placeholder="Type..."
            rows="8"
          ></textarea>
        </div>
        <button onClick={toUpper} className="btn btn-primary">
          Convert To UpperCase
        </button>
        <button onClick={toLower} className="btn btn-primary mx-3">
          Convert To LowerCase
        </button>
        <button onClick={capitalizeWords} className="btn btn-primary">
          First Letter Capital
        </button>
        <button onClick={clear} className="btn btn-primary mx-3">
          Clear
        </button>
        <button onClick={copyText} className="btn btn-primary my-2">
          Copy Text
        </button>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          Words :{" "}
          {
            text.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          , Characters : {text.length}{" "}
        </p>
        <p> Minute to Read : {0.08 * text.split(" ").length} </p>
        <h2>Preview</h2>
        <p className="preview"> {text.toUpperCase()} </p>
      </div>
    </>
  );
};

export default TextForm;
