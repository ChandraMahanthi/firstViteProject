import React from 'react'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import Footer from '../../components/Footer'
import "../../App.css"

function Home() {
  let styles = {backgroundColor:"yellow"};
  return (
    <div className="Outline" style={styles}>Home
        <Header/>
        <MainSection/>
        <Footer/>
    </div>
  )
}

export default Home