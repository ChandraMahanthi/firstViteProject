import React, { useEffect } from 'react'

function Text() {
  useEffect(()=>{
    document.title = "Text Component";
    // localStorage.removeItem('name');
 
  },[])
  return (
    <div>
        Text
    </div>
  )
}

export default Text