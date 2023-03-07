import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Splash from "./components/Splash/Splash";
import StarsCanvas from "./components/canvas/Stars";

const App = () => (
  <div>
    <Splash/>
    <Navbar />
    <Header />
      <div style={{position: "relative"}}>
          <Chef />
      </div>
      <Gallery />
      <div style={{position: "relative"}}>
      <FindUs />
      </div>
      <SpecialMenu />
      <div style={{position: "relative", zIndex: '0'}}>
          <AboutUs />

      </div>




    <Intro />
    <Laurels />


      <div style={{position: "relative", zIndex: '0'}}>
           <Footer />
          <StarsCanvas/>
      </div>
  </div>
);

export default App;
