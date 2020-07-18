import React, { Component } from 'react';
import TopBanner from './TopBanner';

// let toggleCart = 0;

class TopBannerClass extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  // toggleCart = () => {
  //   let evalClick = false;
  //   if(toggleCart === 0) {
  //     evalClick = false;
  //   } else if (toggleCart === 1) {
  //     evalClick = true;
  //   }

  //   if(toggleCart === 0){
  //     toggleCart = 1;
  //   } else if (toggleCart === 1) {
  //     toggleCart = 0;
  //   }
  //   return evalClick
  // }

  clickForCart = () => {
    console.log("if I show up it claims ive been clicked")
    // let toggle = this.toggleCart()
    this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true})
  }

  render() {
    return (
      <div>
        <TopBanner
          text="Complementary standard shipping on all orders"
          sign="+"
          func={this.clickForCart}
          clicked={this.state.clicked}
        />
      </div>
    );
  }
}

export default TopBannerClass;