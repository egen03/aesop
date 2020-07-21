import React from 'react';
import './Styles/shoppingCartModal.css'
import Subtitle from './Subtitle'

const Modal = (props) => {

  return (
    <div className="modalBackground">

      <div className="modal">

        <button
          className="closeModal"
          aria-label="Close Shopping Cart"
          onClick={props.closeModal}
        >×</button>

        <div className="modalContent">
          <Subtitle subtitle="Shipping fees and delivery times" />

          <span className="lineBreak" />

          <div className="afterLine">

            <div className="content">
              <Subtitle subtitle="Standard Shipping" />
              <Subtitle subtitle="Complimentary" />
            </div>

            <div className="content2">
              <Subtitle subtitle="2-4 business days" />
              <Subtitle subtitle="Order by December 16, 11:59PM EDT to ensure delivery by December 24" />
            </div>

          </div>

          <span className="lineBreak" />

          <div className="afterLine">

            <div className="content">
              {/* REPLACE WITH ERICA'S SUBTITLE */}
              <Subtitle subtitle="Next Day Shipping" />
              <Subtitle subtitle="$35" />
            </div>

            <div className="content2">
              <Subtitle subtitle="Order by 12PM ET for delivery on the next working day" />
            </div>

          </div>
          <span className="lineBreak" />
        </div>

      </div>
    </div>
  );
};

export default Modal;