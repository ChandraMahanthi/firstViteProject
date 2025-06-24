import React, { useState } from 'react';
import actionCreator from '../action/action';
import {useDispatch} from 'react-redux';

function Input() {
  let [formData , setFormData]=useState("");
  let dispatch = useDispatch();

  const storeDataInAction = ()=>{
    var actionObject = actionCreator(formData);
    console.log(actionObject);
    dispatch(actionObject);
  }

  return (
    <>
        <h2>Input data</h2>
        <input type="text" placeholder="enter text" onChange={(event )=>{
          setFormData(event.target.value)
        }}/>
        <button onClick={storeDataInAction}>Submit</button>
    </>
  )
}

export default Input