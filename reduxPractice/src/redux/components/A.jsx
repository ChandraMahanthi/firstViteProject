import React from 'react';
import store from "../store/store"
import actionCreatorA from '../action/actionCreatorA';

const A = () => {
  const sendData = () =>{
    const actionObject = actionCreatorA("Data of component A");
    store.dispatch(actionObject);
  }
  return (
    <div 
    className='border-4 border-black w-50 p-3 mt-5 rounded-s-full text-end'>
      <h1 
      className='pb-3'>Component A</h1>
      <button 
        className='w-30 text-white bg-red-800 py-3 px-2 rounded-s-full border-4 border-black'
        onClick={sendData}>A data</button>
    </div>
  )
}

export default A