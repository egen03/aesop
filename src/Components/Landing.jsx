import React from 'react';
import './Styles/landing.css'

const Landing = () => {
  return (
    <div>
      <img className="landing" src={require("../assets/images/Aesop-Homepage-Banner.jpg")} alt="Home page banner"/>
    </div>
  );
};

export default Landing;