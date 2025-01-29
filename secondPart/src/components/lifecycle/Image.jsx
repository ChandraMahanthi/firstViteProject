import React, { useEffect, useState } from 'react'

function Image(props) {
    const [image,setImage] = useState("https://www.livemint.com/lm-img/img/2025/01/26/600x338/Virat_Kohli_1737886515066_1737886515421.jpg");
    const [title,setTitle] = useState("Virat Kohli");
    useEffect(()=>{
      console.log('useEffect is called')
      document.title =title+" Component";
      return ()=>{
        console.log("Returned Function");
      }
    },[])

  return (
    <div>
        <h2>{title}Image</h2>
        <img src={image} width="300" height="300" alt="" />
        <button onClick={()=>{setImage("https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png")}}>Change</button>
        <button onClick={()=>{setTitle("Tony Stark")}}>Change Title</button>
    </div>
  )
}

export default Image