// import React from 'react';
import './Styles/shoppingCartModal.css'

import React, { Component } from 'react';
import Modal from './Modal';

class ShoppingCartModal extends Component {
  constructor(){
    super()
    this.state ={
      hidden: false
    };
  }

  closeModal = () => {
    this.setState({
      hidden: true
    })
  };

  render() { 
    return (
      <div>
        {this.state.hidden ? null : 
          <Modal
            hidden={this.state.hidden}
            closeModal={this.closeModal}
          ></Modal>
        }
      </div>
    );
  }
}

export default ShoppingCartModal;