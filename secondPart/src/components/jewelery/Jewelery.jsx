import React from 'react';
import { getJeweleryData } from '../services/jewelery/jeweleryService';
import './Jewelery.css';

function Jewelery() {
    const getJewelery = ()=>
        {
            getJeweleryData().then(
                (jeweleryResponse)=>{
                    console.log(jeweleryResponse)
                    console.log(jeweleryResponse.data)
                    
                })
                .catch((error)=>{
                console.log(error)

            })
        }

  return (
    <div className='jeweleryContainer'>
        <h2>Jewelery</h2>
        <button onClick={getJewelery}>Get jewelery</button>
    </div>
  )
}

export default Jewelery