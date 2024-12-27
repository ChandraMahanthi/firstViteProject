import React from 'react';
import { useState } from 'react';
import './Profiles.css';

function Profiles() {
  let [imageSource ,setimageSource] = useState("https://i.pinimg.com/736x/c1/16/c6/c116c672489d31db64ba86af48920f70.jpg");
  let [name ,setName] = useState("Adam");
  let [age ,setAge] = useState(28);
  let [gender ,setGender] = useState("Male");

  // let lightStyles = {color : "black" , backgroundColor : "white"};
  let [toggleModes ,setToggleModes] = useState({color : "black" , backgroundColor : "white"});
  let [toggle , setToggle] = useState("Dark")
  // let darkStyles = {color : "white" , backgroundColor : "black"};
  // function dark()
  // {
  //   setStyle(darkStyles);
  // }
  // function light()
  // {
  //   setStyle(lightStyles);
  // }
  // function nextProfile()
function toggleStyle(event)
{
  if(event.target.checked)
  {
    setToggleModes({color : "black" , backgroundColor : "white"});
    setToggle("Dark")
  }
  else
  {
    setToggleModes({color : "white" , backgroundColor : "black"});
    setToggle("Light")
  }
}
function nextProfile()
  {
    setimageSource("https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg");
    setName("Julia");
    setAge(28);
    setGender("Female");
  }
  function prevProfile()
  {
    setimageSource("https://i.pinimg.com/736x/c1/16/c6/c116c672489d31db64ba86af48920f70.jpg");
    setName("Adam");
    setAge(28);
    setGender("Male");

  }
  return (
    <div>
      {/* <div className='Card'  style={styles}> */}
      <div className='Card'  style={{backgroundColor : toggleModes.backgroundColor , color : toggleModes.color}}>
        <div>
          <img src={imageSource} alt="error" className='profilePicture'/>
        </div>
        <div className='profileDetails'>
          <h1>{name}</h1>
          <p>{age}</p>
          <p>{gender}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus cumque deleniti architecto fugiat libero quasi consequuntur autem illo eveniet? Vel, porro corrupti ipsam odit explicabo maxime vero blanditiis ducimus!</p>
          <button onClick={prevProfile}>Previous</button>
          <button onClick={nextProfile}>Next</button>
        </div>
      </div>
            <input onChange={toggleStyle} type="checkbox" id="dark" />
            <label htmlFor="dark">Switch to {toggle} Mode</label>
    </div>
  )
}

export default Profiles