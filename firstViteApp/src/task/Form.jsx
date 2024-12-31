// import React, { useState } from 'react'
// import Table from './Table'

// function Form() {
//     let [name , setName] = useState();
//     let [age , setAge] = useState();
//     let [gender , setGender] = useState();

//     function updateName(event)
//     {
//         setName(event.target.value);
//     }
//     function updateNumber(event)
//     {
//         setAge(event.target.value);
//     }
//     function updateAge(event)
//     {
//         setGender(event.target.value);
//     }
//     function add()
//     {
//         console.log(name)
//         console.log(age)
//         console.log(gender)
//     }
//     return (
//         <div>
//         <input type="text" onChange={updateName} placeholder='Enter your name'/>
//         <input type="text" onChange={updateNumber} placeholder='Enter your phone number'/>
//         <input type="text" onChange={updateAge} placeholder='Enter your age'/>
        
//         <button onClick={add}>Add Data</button>
//         <Table name={name} age={age} gender={gender}></Table>
//     </div>
//   )
// }

// export default Form



import React, { useState } from 'react'
import Table from './Table'

function Form() {
    let [data , setData] = useState({name:"" , age:"" , gender:""});

    // function updateName(event)
    // {
    //     setName(event.target.value);
    // }
    // function updateNumber(event)
    // {
    //     setAge(event.target.value);
    // }
    // function updateAge(event)
    // {
    //     setGender(event.target.value);
    // }
    let dataArray = []
    function add()
    {
        dataArray.push(data)
        console.log(dataArray)
        // console.log(data.name)
        // console.log(data.age)
        // console.log(data.gender)
    }
    return (
        <div>
            <input type="text" onChange={(event)=>{
                setData({...data,name:event.target.value});
            }} placeholder='Enter your name'/>

            <input type="number" onChange={(event)=>{
                setData({...data,age:event.target.value});
            }} placeholder='Enter your phone number'/>

            <input type="text" onChange={(event)=>{
                setData({...data,gender:event.target.value});
            }} placeholder='Enter your age'/>

            <button onClick={add}>Add Data</button>
            {/* <Table name={data.name} age={data.age} gender={data.gender}></Table>  */}
            {/* <Table name={dataArray.name} age={dataArray.age} gender={dataArray.gender}></Table>  */}
            <Table data={dataArray}></Table> 
        </div>
  )
}

export default Form