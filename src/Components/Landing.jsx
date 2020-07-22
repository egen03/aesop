import React from 'react';
import './Styles/landing.css';
import '../assets/images/Aesop-Homepage-Banner.jpg';
import Title from './Title.js';
import Subtitle from './Subtitle.js';
import Logo from './Logo';

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="titleContainer">
        <Logo/>
        <div className="wordsContainer">
          <Title identifier="titleOther" title="Formulations for skin, hair, home and body"/>
          <Subtitle identifier="subtitleOther" subtitle="Created with sensory pleasure in mind"/>
        </div>
      </div>
      <span className="landing">
      </span>
    </div>
  );
};

export default Landing;