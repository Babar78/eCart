import React from "react";
import NavBar from "../components/Navbar/NavBar";

export default function ContactUS() {
  return (
    <>
      <NavBar color="#1F2937"/>
      <div
        className="container"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=4000")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

          width: "100%",
          height: "70vh",
        }}
      >
        <h1 className="">CONTACT US</h1>
      </div>
    </>
  );
}
