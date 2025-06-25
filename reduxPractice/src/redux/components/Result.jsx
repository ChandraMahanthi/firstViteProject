import React from 'react';
import { useSelector } from 'react-redux';
// import store from '../store/store';

const Result = () => {
  let {a,b} = useSelector((store)=>{
    return store;
  })
  return (
    <div
    className='flex justify-center text-xl border-4 border-blue-800 p-10'>
      <h1 
      className='text-xl border-4 border-red-800 p-10 m-3'>Result of A : {a} </h1>
      <h1 
      className='text-xl border-4 border-red-800 p-10 m-3'>Result of B : {b} </h1>
      </div>
  )
}

export default Result