import React from 'react';
import NavBar from './components/Navbar/NavBar';
import landingPic from './images/landingPic.jpg';
import Hero from './components/hero/Hero';
import Featured from './components/featured/Featured';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Featured/>
    <Footer/>
    </>
  );
}

export default App;
