import React, { useEffect } from 'react'

function Text() {
  useEffect(()=>{
    document.title = "Text Component";
 
  },[])
  return (
    <div>
        Text
    </div>
  )
}

export default Text