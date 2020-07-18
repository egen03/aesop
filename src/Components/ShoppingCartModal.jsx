import React, { Component } from 'react';
import './Styles/shoppingCartModal.css'
import Modal from './Modal';

class ShoppingCartModal extends Component {
  constructor(props){
    super(props)
    this.elementRef = React.createRef();
    this.state ={
      hidden: props.clicked
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