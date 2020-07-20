import React from 'react';
import './Styles/shoppingCartModal.css'

const Modal = (props) => {
  
  return (
    <div className="modalBackground">

      <div
        className="modal"
        >


        <button 
        className="closeModal" 
        aria-label="Close Shopping Cart"
        onClick={props.closeModal}
        >×</button>

        <div className="modalContent">
          {/* REPLACE WITH ERICA'S SUBTITLE */}
          <div className="subtitle">Shipping fees and delivery times</div>

          <span className="lineBreak" />

          <div className="afterLine">

            <div className="content">
              {/* REPLACE WITH ERICA'S SUBTITLE */}
              <div className="subtitle">Standard Shipping</div>
              <span>Complimentary</span>
            </div>

            <div className="content2">
              <span>2-4 business days</span>
              <span>Order by December 16, 11:59PM EDT to ensure delivery by December 24</span>
            </div>

          </div>

          <span className="lineBreak" />

          <div className="afterLine">

            <div className="content">
              {/* REPLACE WITH ERICA'S SUBTITLE */}
              <div className="subtitle">Next Day Shipping</div>
              <span>$35</span>
            </div>

            <div className="content">
              <span>Order by 12PM ET for delivery on the next working day</span>
            </div>

          </div>
          <span className="lineBreak" />
        </div>

      </div>
    </div>
  );
};

export default Modal;