import React, {useEffect, useLayoutEffect, useState} from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.scss';
import Splash from "./components/Splash/Splash";
import StarsCanvas from "./components/canvas/Stars";
import Gallery2 from "./container/Gallery2/Gallery2";
import Gallery3 from "./container/Gallery3/Gallery3";
import Gallery4 from "./container/Gallery4/Gallery4";
import Vid3 from "./container/Vid3/Vid3";
import Vid4 from "./container/Vid4/Vid4";
import Vid5 from "./container/Vid5/Vid5";
import JewelryClient from "./container/JewelryClient/JewelryClient";
import JewelryGallery from "./container/JewelryGallery/JewelryGallery";
import Client from "./container/Client/Client";



const App = () => {
    const [splashOff, setSplashOff] = useState(true);

    useLayoutEffect(() => {
        const resolution = window.innerWidth;
        const isMobile = resolution >= 320 && resolution <= 480;


        // console.log(isMobile)
        const isTablet = resolution >= 768 && resolution <= 1024;
        const isDesktop = !isMobile && !isTablet;

        if (resolution < 1024) {
            setSplashOff(false)
            console.log(splashOff)
        }


    }, [])



    return (
        <div>
            <Splash/>
            <Navbar />
            <Header />
            <Client/>


            <div style={{position: "relative", zIndex: '0'}}>
                <AboutUs />

            </div>




            {/*<Intro />*/}
            {/*<Laurels />*/}


            <div style={{position: "relative"}}>
                <Footer />
            </div>
        </div>
    );
}

export default App;
