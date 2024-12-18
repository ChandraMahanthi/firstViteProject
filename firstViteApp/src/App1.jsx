import React from 'react'
import Navbar from './pages1/navbar/Navbar'
import State from "./State"


function App1() {
  return (
    <div style={{border:"2px solid red"}}>App1
        <Navbar 
        source="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" 
        title="Virat Kohli">

        </Navbar>
        
    <State></State>
    </div>
  )
}

export default App1