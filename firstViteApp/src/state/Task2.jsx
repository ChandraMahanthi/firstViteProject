// import React, { useState } from 'react'

// function Task2() {
//     let [one ,setone] = useState()
//     let [two ,settwo] = useState()
//     let [three ,setthree] = useState()
//     let [four ,setfour] = useState()

//     function update1(event)
//     {
//         setone(event.target.value)
        
//     }
//     function update2(event)
//     {
//         settwo(event.target.value)
        
//     }
//     function update3(event)
//     {
//         setthree(event.target.value)
//     }
//     function update4(event)
//     {
//         setfour(event.target.value)
//     }

//     function display()
//     {
//         console.log(one)
//         console.log(two)
//         console.log(three)
//         console.log(four)
//     }
//   return (
//     <div>
//         <input type="text" onChange={update1}/>
//         <input type="text" onChange={update2}/>
//         <input type="text" onChange={update3}/>
//         <input type="text" onChange={update4}/>
//         <button onClick={display}>Click me</button>
//     </div>
//   )
// }

// export default Task2

import React, { useState } from 'react'

function Task2() {

    let [data , setData] = useState({name :"",age:"",gender:""})

    function display()
    {
        // console.log(data.name)
        // console.log(data.age)
        // console.log(data.gender)
        console.log(data)
    }
  return (
    <div>
        <input type="text" onChange={(event)=>{
            setData({...data,name:event.target.value})
        }}/>
        <input type="text" onChange={(event)=>{
            setData({...data,age:event.target.value})
        }}/>
        <input type="text" onChange={(event)=>{
            setData({...data,gender:event.target.value})
        }}/>
        {/* <input type="text" onChange={(event)=>{
            setData(event.target.value)
        }}/> */}
        <button onClick={display}>Click me</button>
    </div>
  )
}

export default Task2