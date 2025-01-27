import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import MensC from './components/mensc/MensC';
import WomensC from './components/womensc/WomensC';
import Electronics from './components/electronics/Electronics';
import Jewelery from './components/jewelery/Jewelery';
import {Route} from 'react-router-dom';
import Image from './components/lifecycle/Image';
import Text from './components/lifecycle/Text';
import './App.css'
// import Users from './components/axios/users/Users'


function App() {

  const [show , setShow] = useState(true);
  const text = ()=>{
    setShow(false)
  }
  const image = ()=>{
    setShow(true)
  }
  return (
    <div>
      <Navbar></Navbar>
      {/* <Route path = {""}/> */}
      {/* <Image></Image>
      <Text></Text> */}

      {
        show ? <Image/> : <Text/>
      }

      <button onClick={text}>Show Text</button>
      <button onClick={image}>Show Image</button>
      {/* <Home></Home>
      <MensC></MensC>
      <WomensC></WomensC>
      <Electronics></Electronics>
      <Jewelery></Jewelery> */}

      {/* <Users></Users> */}
    </div>
  )
}

export default App