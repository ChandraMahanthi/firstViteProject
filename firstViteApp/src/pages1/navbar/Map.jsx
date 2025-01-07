import React, { useState } from 'react'

function Map() {
    // var data = [1,2,3,4,5];
    const[data , setData] = useState([
        {
           name : 's1',
           city : 'c1', 
        },
        {
           name : 's2',
           city : 'c2', 
        },
        {
           name : 's3',
           city : 'c3', 
        },
        {
           name : 's4',
           city : 'c4', 
        },
])
    // var data = [<li>1</li>, <li>2</li>, <li>3</li>]
  return (
    <div>
        {/* <ul>{data.map((element ,index)=>{
            return <li>{element}</li>
        })}</ul> */}

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((element , index)=>{
                        return <tr>
                            <td>{element.name}</td>
                            <td>{element.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        {/* <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul> */}

    </div>
  )
}

export default Map