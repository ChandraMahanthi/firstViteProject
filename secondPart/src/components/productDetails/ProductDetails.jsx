import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [state , setState]=useState(
    {
      id:0,
      title:"",
      rating:{
        rate:0,
        count:0
      },
      category:"",
      price:0,
      description:"",
      image:""
    }
  );
  let object = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:3000/categories_electronics/${object.id}`).then((res)=>{
      console.log(res);
      setState(state,...res.data);
    })
    .catch((error)=>{
      alert('error while fetching data');
    });
  },[])
  return (
    <div>
        <h2>ProductDetails</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure consequatur vel quas obcaecati itaque unde saepe quia similique mollitia, ab ex quasi expedita! Tenetur aliquam totam tempora. Voluptas, corrupti!</p>
        <h1>{object.id}</h1>
    </div>
  )
}

export default ProductDetails