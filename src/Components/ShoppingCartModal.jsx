import React, { Component } from 'react';
import './Styles/shoppingCartModal.css'
import Modal from './Modal';

class ShoppingCartModal extends Component {
  constructor(props){
    super(props)
    this.state ={
      hidden: props.clicked
    };
  }

  closeModal = () => {
    // setTimeout(() => {
      this.setState({
        hidden: true
      })
    // }, 3000)
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