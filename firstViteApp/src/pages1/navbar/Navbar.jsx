import React from 'react'

function Navbar(props) {
  return (
    <div>
        <img src={props.source} width = {500} height = {400}/>
        <p>{props.title}</p>
    </div>
  )
}

export default Navbar