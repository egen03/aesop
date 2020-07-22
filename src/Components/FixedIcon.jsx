import React from 'react';
import './Styles/fixedIcon.css'

const FixedIcon = () => {
  return (
    <div className="iconContainer">
      <div className="icon">
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <img className="svg" src={require("../assets/images/icon/chat.svg")} alt=""/>
      </div>
    </div>
  );
};

export default FixedIcon;