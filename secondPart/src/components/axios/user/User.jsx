import React from 'react'
import './User.css'

function User({EachUserData}) {
  console.log(EachUserData);
  return (
    <div className='cardUser'>
        <img src= {EachUserData.picture.large}alt="" width={'100%'} height={'200'} />
        <p>Name : <strong>{EachUserData.name.first}</strong></p>
        <p>Gender : {EachUserData.gender}</p>
        <p>E-Mail ID : {EachUserData.email}</p>
        <button>User Details</button>
    </div>
  )
}

export default User

// user.picture.medium
// user.name.first
// user.gender