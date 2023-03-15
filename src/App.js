import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Splash from "./components/Splash/Splash";
import StarsCanvas from "./components/canvas/Stars";
import Gallery2 from "./container/Gallery2/Gallery2";
import Gallery3 from "./container/Gallery3/Gallery3";
import Gallery4 from "./container/Gallery4/Gallery4";
import Vid3 from "./container/Vid3/Vid3";
import Vid4 from "./container/Vid4/Vid4";
import Vid5 from "./container/Vid5/Vid5";

const App = () => (
  <div>
    <Splash/>
    <Navbar />
    <Header />
      {/*<Gallery4 />*/}
      <div style={{position: "relative"}}>
          <Chef />
      </div>
      <Gallery2 />
      <div style={{position: "relative"}}>
      <Vid5 />
      </div>
      <Gallery3 />
      <div style={{position: "relative"}}>
          <Vid3 />
      </div>
      <Gallery />
      <div style={{position: "relative"}}>
          <Vid4 />
      </div>
      {/*<SpecialMenu />*/}
      <div style={{position: "relative", zIndex: '0'}}>
          <AboutUs />

      </div>




    {/*<Intro />*/}
    {/*<Laurels />*/}


      <div style={{position: "relative",
          // zIndex: '0'
      }}>
           {/*<Footer />*/}
          {/*<StarsCanvas/>*/}
      </div>
  </div>
);

export default App;
