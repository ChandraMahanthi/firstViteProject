import React from 'react'
import Navbar from './components/navbar/Navbar';
import Electronics from './components/electronics/Electronics';
import Jewelery from './components/jewelery/Jewelery';
import './App.css'
// import Users from './components/axios/users/Users'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Electronics></Electronics>
      <Jewelery></Jewelery>

      {/* <Users></Users> */}
    </div>
  )
}

export default App