import React, { useState } from 'react';
import './Electronics.css';
import { electronicService } from '../services/electronics/electronicsService';

function Electronics() {
    let [electronicProducts , setElectronicProducts] = useState([]);
    const getelectronicService = ()=>
        {
            electronicService().then(
                (res)=>{
                    alert("Something went wrong");
                    console.log(res.data);
                    setElectronicProducts(res.data)
                })
                .catch(
                    (error)=>{
                        console.log(error)
                    })
                }
                return (
                    <div className='electronicContainer'>
        <h2>Electronics</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tenetur, aliquid sunt nesciunt similique quos animi molestias dolores dolorem iste temporibus dignissimos labore nihil expedita eveniet cupiditate voluptatem, corporis repellendus.</p>
        <button onClick={getelectronicService}>Get Electronics</button>
        {electronicProducts.length > 0 ? <div>{electronicProducts.map((element,index)=>{
            return <div className='card'> 
                <img src={element.image} alt=""/>
                <h2>{element.title}</h2>
                <p>{element.description}</p>
                <h4>{element.price}</h4>
            </div>
        })} </div> : <h2> No Data to show</h2> }
    </div>
  )
}

export default Electronics