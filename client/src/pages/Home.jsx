import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/hero/Hero";
import Featured from "../components/featured/Featured";

export default function Home() {
  return (
    <>
      <NavBar color="transparent"/>
      <div>
        <Hero />
        <Featured />
        <Footer />
      </div>
    </>
  );
}
