import React, {useLayoutEffect, useState} from 'react';
import Div100vh from 'react-div-100vh';
import videoBG from '../../assets/aviant-customs.mp4'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.scss';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";

const Header = () => {
    const [starsOff, setStarsOff] = useState(true);

    useLayoutEffect(() => {
        const resolution = window.innerWidth;

        if (resolution < 1024) {
            setStarsOff(false)
        }
    }, [])

    return (
        <Div100vh className='app__header'>
            <Div100vh className=" app__wrapper section__padding"
                      style={{maxWidth: '1400px'}}
                      id="home">


                <video className="home-bg-video"  src={videoBG} autoPlay loop muted playsInline>
                </video>



                {/* Overlay */}
                <div className="home-overlay"></div>


                <div className="app__wrapper_info" style={{zIndex: '5'}}>
                    <SubHeading title="Premium Custom Jewelry" />
                    <h1 className="app__header-h1">Aviant Customs</h1>
                    <p className="p__opensans" style={{ margin: '2rem 0' }}>(Website description or tagline) </p>
                    <button type="button" className="custom__button">Get a Quote</button>
                </div>

                <div className="app__wrapper_img custom__mobile-header" style={{flexDirection: 'column', zIndex: '5'}}>
                    <img src={images.jiggs} alt="header_img" />
                </div>
            </Div100vh>
            {starsOff && <StarsCanvas/>}

        </Div100vh>

    );

}

export default Header;
