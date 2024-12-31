import React from 'react'
import './Table.css'

function Table(props) {
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign:"center"}}>
                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.age}</td>
                    <td>{props.data.gender}</td>
                    <td><button>Delete</button></td>
                </tr>
            </tbody>
            
        </table>
    </div>
  )
}

export default Table