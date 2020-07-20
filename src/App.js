import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import FixedIcon from './Components/FixedIcon'
import Landing from './Components/Landing'
import TopBannerClass from './Components/TopBannerClass'

function App() {
  return (
    <div className="App">
      <TopBannerClass/>
      <NavBar/>
      <Landing/>
      <FixedIcon/>
    </div>
  );
}

export default App;
