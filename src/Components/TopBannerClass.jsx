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

  clickForCart = () => {
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