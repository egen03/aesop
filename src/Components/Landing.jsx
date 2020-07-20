import React from 'react';
import './Styles/landing.css'
import '../assets/images/Aesop-Homepage-Banner.jpg'
import Title from './Title'

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="titleContainer">
        <Title className="title" title="Formulation for skin, hair, home and body"/>
      </div>
      <span className="landing">
      </span>
    </div>
  );
};

export default Landing;