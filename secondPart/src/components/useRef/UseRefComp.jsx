import React,{useState,useRef} from 'react'

function UseRefComp() {
    let ref = useRef("");
    let [number,setNumber]=useState(0);
    var name = 'A';

    const updateNumber = ()=>{
        setNumber(2);
    }
    const updateName = ()=>{
        name = 'B'
    }

    const display = ()=>{
        console.log(name,number)
    }
    useRef();
  return (
    <div>
        <h1>Name : {name}</h1>
        <h1>Number : {number}</h1>
        <button onClick={updateNumber}>Update Number</button>
        <button onClick={updateName}>Update Name</button>
        <button onClick={display}>Show Results</button>
    </div>
  )
}

export default UseRefComp