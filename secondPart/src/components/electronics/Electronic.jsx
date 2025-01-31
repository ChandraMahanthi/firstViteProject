import React from 'react'
import { Link } from 'react-router-dom';


function Electronic({product}) {
    const{image,rating,price,title} = product ;
  return (
    <div>
            <div className='card'> 
                <img src={image} alt=""/>
                <h2>{title}</h2>    
                <p>{price}</p>
                <Link to='/productDetails'>
                    <button>Product Details</button>
                </Link>
                <h4>{}</h4>
            </div> 
    </div>
  )
}

export default Electronic