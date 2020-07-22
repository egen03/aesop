import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Title from './Components/Title';
import Subtitle from './Components/Subtitle';
import Description from './Components/Description';
import Giftbtn from './Components/Giftbtn';
import Bodybtn from './Components/Bodybtn';
import Storebtn from './Components/Storebtn';
import Skincarebtn from './Components/Skincarebtn';
import Imgtitle from './Components/Imgtitle';
import Imgsubtitle from './Components/Imgsubtitle';


function App() {
  return (
    <div className="App">
      <NavBar/>
{/* PAGE 1 OF WIREFRAME */}
      <Subtitle subtitle="Aesop essentials" />
      <Title title="A selection of staples" />
      <Description description="From beloved formulations first created decades ago to personal care necessities."/>

{/* PAGE 2 OF WIREFRAME */}
      <div className="row2">
      
      <div className="row2text">
      <Title title="Five mythical Gift Kits" />
      <Description description="Crafted for gods, mortals, and muses alike, our new Gift Kit collection makes for inspired gift giving this festive season." />
      <Giftbtn />
      </div>

      <div className="row2image">
        <img src="aesop/src/assets/images/Aesop-Free-Market-Carousel-1-Desktop-2560x1440px.png" alt="Gift Kits Img" />
      </div>

      </div>
      
{/* PAGE 4 OF WIReFRAME */}
      <Subtitle subtitle="Fragrance" />
      <Title title="An aromatic signature" />
      <Description description="Our bold, sophisticated fragrances-from Parfum and Eau du Parfum to Room Sprays-are meticulously crafted using high quality ingredients." />

{/*  PAGE 5 OF WIREFRAME */}
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

      <div className="row4image">
       <img src="aesop/src/assets/images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png" alt="Odyssey of Gifts img" />
      </div>

      </div>

{/* PAGE 6 OF WIREFRAME */}
      <div className="row5">
      <Subtitle  subtitle="For hands and body"/>
      <Title title="Daily cleansing"/>
      <Description description="Ensure impeccable hygiene with our range of mild yet effective formulations."/>
      <Bodybtn />
      </div>

{/* PAGE 7 OF WIREFRAME (TEXT GOES ON TOP OF IMAGE)*/}
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

{/* PAGE 8 OF WIREFRAME */}
    <div className="row7">
    <Subtitle subtitle="Nurturing formulations"/>
    <Title title="For all ages, genders and skin types" />
    <Description description="Healthy skin is the product of careful cleansing, nourshing hydration and protection against environmental factors."/>
    <Skincarebtn />
    </div>

{/* PAGE BEFORE FOOTER */}
<div className="row8">
    
    <div className="row8image">
      <img src=""/>
    </div>    
    
    <div className="row8text1">
    <Subtitle subtitle="Discover more" />
    <Imgtitle imgtitle="Kits and duets" />
    <Imgsubtitle imgsubtitle="Travel" />
    <Imgsubtitle imgsubtitle="Gift Kits" />
    <Imgsubtitle imgsubtitle="Skin" />
    <Imgsubtitle imgsubtitle="Hand and body" />
    </div>
    
    <div className="row8text2">
    <Imgtitle imgtitle="Hair care" />
    <Imgsubtitle imgsubtitle="Cleanse" />
    <Imgsubtitle imgsubtitle="Condition" />
    <Imgsubtitle imgsubtitle="Treat" />
    <Imgsubtitle imgsubtitle="Groom" />
    </div>

</div>
   

    </div>
  );
}

export default App;
 