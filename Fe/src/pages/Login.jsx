import React, { useState, useEffect } from "react";
import MyNavBar from "../components/NavBar/NavBar";

function Login() {
  const redirectHandler = () => {
    window.location.href = `${process.env.REACT_APP_URL}/auth/github`;
  };

  return (
    <>
      <MyNavBar />
    </>
  );
}

export default Login;
