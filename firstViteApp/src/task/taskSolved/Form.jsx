import React, { useState } from 'react';
import Table from './Table';

function Form() {
    let [inputData ,setinputData ] = useState(
        {
            name:"", 
            password:"", 
            email:""
        });
    let [usersList, setUsersList] = useState([])
        // let usersList = [];

        function getuser()
        {
           setUsersList([...usersList,inputData])
        }
        function getUserName(event)
        {
            setinputData({...inputData,name:event.target.value})
        }
        function getUserPassword(event)
        {
            setinputData({...inputData,password:event.target.value})
        }
        function getUserEmail(event)
        {
            setinputData({...inputData,email:event.target.value})
        }
  return (
    <div>
        <input type="text" onChange={getUserName}/>
        <input type="password" onChange={getUserPassword}/>
        <input type="email" onChange={getUserEmail}/>
        <button onClick={getuser}>Submit</button>
        <Table usersList = {usersList} setUsersList={setUsersList}></Table>
    </div>
  )
}

export default Form