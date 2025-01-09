import React from 'react';
import './Users.css';
import User from '../user/User';
import getUsers from '../service/UsersService';

function Users() {
const sendRequest = ()=>{
    getUsers()
}
  return (
      <div className='usersContainer'>
        <h2>Heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo nemo aperiam? Harum ab voluptate voluptatum laboriosam aliquam reprehenderit! Rerum optio eum laudantium quam voluptatibus accusantium tempore repellat laboriosam! Ratione.</p>
        <button onClick={sendRequest}>Click me</button>
        <User></User>
    </div>
  )
}

export default Users