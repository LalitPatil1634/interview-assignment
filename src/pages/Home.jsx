import React from "react";
import Login from "../components/Login";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <img
          src="bg-image.png"
          alt="BackgroundImage"
          className="background-image"
        />

        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <Login />
      </div>
    </>
  );
};

export default Home;
