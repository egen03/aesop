import React from 'react';
import './Styles/landing.css';
import '../assets/images/Aesop-Homepage-Banner.jpg';
import Title from './Title.jsx';
import Subtitle from './Subtitle.jsx';
import Logo from './Logo';

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="titleContainer">
        <Logo/>
        <div className="wordsContainer">
          <Title title="Formulations for skin, hair, home and body"/>
          <Subtitle subtitle="Created with sensory pleasure in mind"/>
        </div>
      </div>
      <span className="landing">
      </span>
    </div>
  );
};

export default Landing;