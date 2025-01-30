import React, { useEffect, useState } from 'react'


function Users() {
    const [user,setUser] = useState([])
    useEffect(()=>{
        getUser();
    })
    const getUser =async ()=>{
        var res = await fetch ("https://jsonplaceholder.typicode.com/users");
        var data = await res.json();
        setUser(data)
    }
  return (
    <div>
        <h2>Users Component</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt iure ipsum autem consectetur consequuntur dolor magnam at, dicta earum, incidunt dignissimos voluptatum ut libero qui nam placeat, odit illo minus?</p>
        <button onClick={getUser}>Get Users</button>
        {
            user.length > 0 ? <ol>
                {user.map((element)=>{
                return <li>{element.name}</li>
            }) }</ol> : <h2 style={{color:"red"}}>No users Found</h2>
        }
    </div>
  )
}

export default Users