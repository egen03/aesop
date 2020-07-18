import React from 'react';
import './Styles/topBanner.css'


const TopBanner = (props) => {
  return (
    <div className="bannerContainer">
      <button className="bannerButton">
        <div className="bannerText">
          {props.text}
        </div>
        <div className="plusSign">
          {props.sign}
        </div>
      </button>
    </div>
  );
};

export default TopBanner;
