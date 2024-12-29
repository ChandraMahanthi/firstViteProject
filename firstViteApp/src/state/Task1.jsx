// Another approach

import React, { useState } from 'react'

function Task() {
let [inputData , setinputData] = useState()

// function collectData()
// {
//     setinputData((currentData)=>
//     {
//         return currentData;
//     })
// }
function popup()
{
    alert(inputData)
}

  return (
    <div>
        <input type="text" onChange={(event)=>
            {
                // var inputDOMElement = event.target;
                // var inputDOMElementValue = inputDOMElement.value;
                // inputData = inputDOMElementValue;
                setinputData(event.target.value);
                console.log(inputData)
                // collectData();
            }}/>
        <button onClick={popup}>Submit</button>
        
    </div>
  )
}

export default Task