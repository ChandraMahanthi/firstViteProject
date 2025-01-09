import React, { useState } from 'react';
import './Users.css';
import User from '../user/User';
import {getUsers} from '../service/UsersService';

function Users() {
  let[users,setUsers] = useState([]);
const sendRequest = ()=>{
 var usersPromiseObject = getUsers();
 usersPromiseObject.then(   
      (users)=>
      {   
        console.log(users.data.results);
        setUsers(users.data.results);
      }
  )
  .catch(
      (error)=>
      {
        alert("Failed to get user data")
      }
  );
}
  return (
      <div className='usersContainer'>
        <h2>Heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo nemo aperiam? Harum ab voluptate voluptatum laboriosam aliquam reprehenderit! Rerum optio eum laudantium quam voluptatibus accusantium tempore repellat laboriosam! Ratione.</p>
        <button onClick={sendRequest}>Click me</button>
        <div className='usersContainer'>
          {
            users.map((element , index)=>{
              return <User EachUserData={element}/>
            })
          }
        </div>
        </div>
  )
}

export default Users