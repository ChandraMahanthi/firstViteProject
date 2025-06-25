import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-center gap-10 p-10 bg-black'>
        <Link 
          to = "/"
          className='text-blue-500 text-xl'>Home</Link>
        <Link 
          to = "/result"
          className='text-blue-500 text-xl'>Result</Link>
    </div>
    </>
  )
}

export default Navbar