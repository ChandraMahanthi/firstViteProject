import React, { useState } from 'react'

function Image(props) {
    let [image,setImage] = useState("https://www.livemint.com/lm-img/img/2025/01/26/600x338/Virat_Kohli_1737886515066_1737886515421.jpg")
  return (
    <div>
        <h2>Image</h2>
        <img src={image} width="300" height="300" alt="" />
        <button onClick={()=>{setImage("https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png")}}>Change</button>
    </div>
  )
}

export default Image