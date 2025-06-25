
import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Display from './redux Concept/components/Display'
// import Input from "./redux Concept/components/Input"
import Home from './redux/components/Home'
import Result from './redux/components/Result'
import Navbar from './redux/components/Navbar'

function App() {

  return (
    <>
     {/* <Input/>
     <hr />
     <Display/> */}
  <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/result" element = {<Result/>}/>
      </Routes>
    </>
  )
}

export default App
