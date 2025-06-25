import React from 'react';
import actionCreatorB from '../action/actionCreatorB';
import store from '../store/store';

const B = () => {
  const sendData = () =>{
    const actionObject = actionCreatorB("Data of component B");
    store.dispatch(actionObject);
  }
  return (
    <div 
    className='border-4 border-black w-50 p-3 mt-5 rounded-r-full'>
      <h1 
      className='pb-3'>Component B</h1>
      <button 
      className='w-30 text-white bg-green-800 py-3 px-2 rounded-r-full border-4 border-black'
      onClick={sendData}>B data</button>
    </div>
  )
}

export default B;