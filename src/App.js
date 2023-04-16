import React, {useEffect, useLayoutEffect, useState} from 'react';

import { AboutUs, Footer, Header} from './container';
import { Navbar } from './components';
import './App.scss';
import Splash from "./components/Splash/Splash";
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
