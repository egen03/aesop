import React from 'react';
import './Styles/shoppingCartModal.css'
import Subtitle from './Subtitle.js'

const Modal = (props) => {

  return (
    <div className="modalBackground">

      <div className="modalMine">

        <button
          className="closeModal"
          aria-label="Close Shopping Cart"
          onClick={props.closeModal}
        >×</button>

        <div className="modalContent">
          <Subtitle identifier="subtitle1" subtitle="Shipping fees and delivery times" />

          <span className="lineBreak" />

          <div className="afterLine">

            <div className="content">
              <Subtitle identifier="subtitle1" subtitle="Standard Shipping" />
              <Subtitle identifier="subtitle2" subtitle="Complimentary" />
            </div>

            <div className="content2">
              <Subtitle identifier="subtitle2" subtitle="2-4 business days" />
              <Subtitle identifier="subtitle2" subtitle="Order by December 16, 11:59PM EDT to ensure delivery by December 24" />
            </div>

          </div>

          <span className="lineBreak" />

          <div className="afterLine">

            <div className="content">
              {/* REPLACE WITH ERICA'S SUBTITLE */}
              <Subtitle identifier="subtitle1" subtitle="Next Day Shipping" />
              <Subtitle identifier="subtitle2" subtitle="$35" />
            </div>

            <div className="content2">
              <Subtitle identifier="subtitle2" subtitle="Order by 12PM ET for delivery on the next working day" />
            </div>

          </div>
          <span className="lineBreak" />
        </div>

      </div>
    </div>
  );
};

export default Modal;