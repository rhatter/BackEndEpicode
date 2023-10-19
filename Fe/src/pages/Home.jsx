import React, { useState, useEffect } from "react";
import MyNavBar from "../components/NavBar/NavBar";
import "./Home.css";
import Articles from "../components/Articles/Articles";

function Home() {
  const redirectHandler = () => {
    window.location.href = `${process.env.REACT_APP_URL}/auth/github`;
  };

  return (
    <>
      <MyNavBar />
      <Articles />
      <button onClick={() => redirectHandler()}>Testo a quel bottone</button>
    </>
  );
}

export default Home;
