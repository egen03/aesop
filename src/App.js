import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import FixedIcon from './Components/FixedIcon'
import Landing from './Components/Landing'
import TopBannerClass from './Components/TopBannerClass'
import Footer from './Components/Footer'
// import SmCarousel from './Components/SmCarousel'

function App() {
  return (
    <div className="App">
      
      <div><TopBannerClass/></div>
      <div><NavBar/></div>
      <Landing/>
      <div><FixedIcon/></div>

      {/* <SmCarousel/> */}



      {/* <div><Footer /></div> */}
    </div>
  );
}

export default App;
