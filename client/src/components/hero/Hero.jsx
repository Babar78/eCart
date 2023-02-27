import React from 'react'
import { useRef, useLayoutEffect,useState, useEffect } from 'react'
import NavBar from '../Navbar/NavBar'
import landingPic from '../../images/landingPic.jpg'
import styles from './Hero.module.css'

function Hero() {
  
  return (
    <>
    
    {/* <div id="heroContainer" ref={ref} className={`${styles.container}`} style={{backgroundImage:`url(${landingPic})`, backgroundSize:"contain", backgroundRepeat:'no-repeat', width:"100%", height:"100vh"}}> 
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${styles.button}`}>
        Shop Now
    </button>
    </div> */}
    <div className={`${styles.container} bg-red-100`}>
    <NavBar/>
      <img src={landingPic} alt="landingPic" />
      <button className={`bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ${styles.button}`}>
        Shop Now
    </button>
    </div>
    </>
    )
}
export default Hero;