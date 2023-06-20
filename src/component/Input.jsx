
import React, { useState } from "react";
import './style.css'



function Input ({charCounter ,text}){
  
    return(
        <div>
            <textarea cols="30" rows="10" placeholder="write your text"  onChange={charCounter}></textarea>
            <h4>input length : {text}</h4>
        </div>
    )

}

export default Input;