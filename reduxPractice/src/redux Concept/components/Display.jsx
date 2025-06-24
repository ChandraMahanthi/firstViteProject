import React from 'react';
import { useSelector } from 'react-redux';

function Display() {
  let storeData = useSelector((store)=>{
    return store;
  })
  return (
    <>
        <h2>Display component</h2>
        <p>Input Data : {storeData}</p>
    </>
  )
}

export default Display