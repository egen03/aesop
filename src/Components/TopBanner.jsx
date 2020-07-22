import React from 'react';
import './Styles/topBanner.css'
import ShoppingCartModal from './ShoppingCartModal';


const TopBanner = (props) => {
  return (
    <div className="bannerContainer">
      {props.clicked ? <ShoppingCartModal clicked={false} /> : null}
      <button 
        className="bannerButton"
        onClick={props.func}
        >
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
