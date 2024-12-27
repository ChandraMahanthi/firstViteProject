import React from 'react'
import { useState } from 'react'

function ImageSlider() {
    let [image , setImage] = useState("https://c.ndtvimg.com/2024-06/60mnps0c_virat-kohli-ani_640x480_30_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605")
        function nextImage()
        {
            setImage(image="https://c.ndtvimg.com/2024-06/60mnps0c_virat-kohli-ani_640x480_30_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
                name="India"
            )
        }
        function prevImage()
        {
            setImage(image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/virat-kohli-061308633-16x9_0.jpg?VersionId=wwIZTrh1vnpjFczjwAJCROXi7evBNuNo&size=690:388",
                name="RCB"
            )
        }
  return (
    <div>
        <button onClick={nextImage}>Next</button>
        <img src={image} alt="" width={200} height={200} />
        <span>{name}</span>
        <button onClick={prevImage}>Previous</button>
    </div>
  )
}

export default ImageSlider