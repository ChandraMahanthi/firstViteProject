// My Approach

import React, { useState } from 'react'

function Task() {
let [inputData , setinputData] = useState()

function collectData(event)
{
    setinputData((currentData)=>
    {
        currentData = event.target.value;
        console.log(currentData)
        return currentData;
    })
}
function popup()
{
    alert(inputData)
}

  return (
    <div>
        <input type="text" onChange={collectData}/>
        <button onClick={popup}>Submit</button>
        
    </div>
  )
}

export default Task