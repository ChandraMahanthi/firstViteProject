// import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import MensC from './components/mensc/MensC';
import WomensC from './components/womensc/WomensC';
import Electronics from './components/electronics/Electronics';
import Jewelery from './components/jewelery/Jewelery';
import {Route,Routes} from 'react-router-dom';
import ProductDetails from './components/productDetails/ProductDetails';
import PageNotFound from './components/pageNotFound/PageNotFound';
// import Image from './components/lifecycle/Image';
// import Text from './components/lifecycle/Text';
import './App.css'
// import Users from './components/lifecycle/Users';  
// import Users from './components/axios/users/Users'


function App() {

  // const [show , setShow] = useState(true);
  // const text = ()=>{
  //   setShow(false)
  // }
  // const image = ()=>{
  //   setShow(true)
  // }
  return (
    <div>
      {/* <Users/> */}
      {/* <Image></Image>
      <Text></Text> */}
{/* 
      {
        show ? <Image/> : <Text/>
        }
        
        <button onClick={text}>Show Text</button>
        <button onClick={image}>Show Image</button> */}
      {/* <Home></Home>
      <MensC></MensC>
      <WomensC></WomensC>
      <Electronics></Electronics>
      <Jewelery></Jewelery> */}

      {/* <Users></Users> */}
      <Navbar></Navbar>
      <Routes>
        <Route path = {"/"} element={<Home/>}/>
        <Route path = {"/electronics"} element={<Electronics/>}/>
        <Route path = {"/jewelery"} element={<Jewelery/>}/>
        <Route path = {"/mens"} element={<MensC/>}/>
        <Route path = {"/womens"} element={<WomensC/>}/>
        <Route path = {"/productDetails"} element={<ProductDetails/>}/>
        <Route path={'*'} element={<PageNotFound/>}/>

      </Routes>
    </div>
  )
}

export default App