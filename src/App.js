import React from 'react';
import './App.css';
import './Components/Styles/wrapper.css';
import NavBar from './Components/NavBar';
import FixedIcon from './Components/FixedIcon';
import Landing from './Components/Landing';
import TopBannerClass from './Components/TopBannerClass';
import Footer from './Components/Footer'
import SmCarousel from './Components/SmCarousel'
import Description from './Components/Description';
import Giftbtn from './Components/Giftbtn';
// import Bodybtn from './Components/Bodybtn';
import Storebtn from './Components/Storebtn';
// import Skincarebtn from './Components/Skincarebtn';
// import Imgtitle from './Components/Imgtitle';
// import Imgsubtitle from './Components/Imgsubtitle';
import Subtitle from './Components/Subtitle';
import Title from './Components/Title';
import LgCarousel from './Components/LgCarousel';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TopBannerClass/>
        <div className="nbContainer">
          <div className="test">
            <NavBar/>
          </div>
          <div className="landContainer">
            <Landing/>
          </div>
        </div>
        <FixedIcon/>
        </div>
            <SmCarousel/>
            <div className="row2">
      
      <div className="row2text">
      <Title title="Five mythical Gift Kits" />
      <Description description="Crafted for gods, mortals, and muses alike, our new Gift Kit collection makes for inspired gift giving this festive season." />
      <Giftbtn />
      </div>

      <div className="row2imagecontainer">
      <div className="row2image">
        {/* <img src={require("/Users/student_ga111/Desktop/Cassini /mod2/websitemockup/aesop/src/assets/images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png")} alt="Gift Kits Img" /> */}
      </div>
     </div>

      </div>
     <SmCarousel/>

     <div className="row4">
      
      <div className="row4text">
      <Title title="An odyssey of gifts, for generous and inspired giving" />
      <Subtitle subtitle="Seasonal Gift Kits" />
      <Subtitle subtitle="Aesop favorites" />
      <Subtitle subtitle="Small gestures" />
      <Subtitle subtitle="Generous offerings" />
      <Subtitle subtitle="Fragrant formulations" />
      <Subtitle subtitle="Treats for self" />
      <Subtitle subtitle="All gifts" />
      </div>

      <div className="row4imagecontainer">
      <div className="row4image">
       {/* <img src={require("aesop/src/assets/images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png")} alt="Odyssey of Gifts img" /> */}
      </div>
      </div>

      </div>
      <SmCarousel/>
      <div className="row6">

      <div className="row6text1">  
      <Subtitle subtitle="Architecture and Design"/>
      <Subtitle subtitle="Spaces of distinction"/>
      </div>

      <div className="row6text2">
      <Description description="Aesop stores are informed by the history fabric and context of their local environments, yet retain an aesthetic consistency." />
      <Storebtn />
      </div>

      </div>
      <LgCarousel/>
      <SmCarousel/>
      <Footer/>
    </div>
  );
}

export default App;
