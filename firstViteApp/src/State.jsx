import React from 'react'
import { useState } from 'react'

function State() {
    let [state , setState] = useState(0)
    const changeState = () =>
    {
        setState(state+1)
    }

    var variable = 0; 
    const change = () =>
    {
        variable++
        console.log(variable)
        var h2 = document.getElementById("result");
        h2.innerText = `Value : ${variable}`
    }
  return (
    <div>
        <h1>Without State<button onClick={change}>Change</button></h1>
        <h2 id='result'>Value : {variable}</h2>
        <h1>Using State<button onClick={changeState}>Change</button></h1>
        <h2>State : {state}</h2>
        
    </div>
  )
}

export default State