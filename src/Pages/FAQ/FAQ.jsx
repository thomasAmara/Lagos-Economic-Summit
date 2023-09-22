import { useState } from "react";
import React from "react";
import "../FAQ/FAQ.css";
import { GrFormNext } from "react-icons/gr";

function FAQ() {
  const [ backgroundColor1, setBackgroundColor1 ] = useState('#ecfbfd');
  const [ backgroundColor2, setBackgroundColor2] = useState('white')
  const [toggle, setToggle] = useState(true)

  function swapColors() {
    setBackgroundColor1(backgroundColor2)
    setBackgroundColor2(backgroundColor1)
    setToggle(!toggle)
  }

 

  return (
    <div className="faq">
      <div>
      <h1>Summit FAQ</h1>
      </div>
      <div className="questions">
        <h2>General Summit questions</h2>
        {/* <div className="container"> */}
        <div className="rectangle left-rectangle">
          <div className="rectangle sub-one" style={{backgroundColor: backgroundColor1}}>
            <div
              className={
                toggle ? "radio done" : "radio"
              }
              onClick={swapColors}
            ></div>
            <p>HOW DO I LEARN ABOUT SPONSORSHIP OPPORTUNITIES AT SUMMIT?</p> 
            <GrFormNext />
          </div>
          <div className="rectangle sub-two" style={{backgroundColor: backgroundColor2}}>
            <div
              className={
                toggle ? "radio" : "radio done"
              }
              onClick={swapColors}
            ></div>
            <p>IS THERE AN AGENDA FOR THE EVENT</p>
            <GrFormNext />
          </div>
        </div>
        <div className="rectangle right-rectangle">
          <div className="faq-answer">
            {toggle ? <p>HOW DO I LEARN ABOUT SPONSORSHIP OPPORTUNITIES AT SUMMIT?</p> : <p>We will be announcing speakers soon, stay tuned</p>}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default FAQ;
