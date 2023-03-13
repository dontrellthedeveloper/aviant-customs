import React from 'react';
import Div100vh from 'react-div-100vh';
import videoBG from '../../assets/aviant-customs.mp4'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
    <Div100vh className='app__header'>
        <Div100vh className=" app__wrapper section__padding" style={{maxWidth: '1400px'}} id="home">


            <video className="home-bg-video"  src={videoBG} autoPlay loop muted playsInline>
            </video>



            {/* Overlay */}
            <div className="home-overlay"></div>


            <div className="app__wrapper_info">
                <SubHeading title="Premium Custom Jewelry" />
                <h1 className="app__header-h1">Aviant Customs</h1>
                <p className="p__opensans" style={{ margin: '2rem 0' }}>(Website description or tagline) </p>
                <button type="button" className="custom__button">Get a Quote</button>
            </div>

            <div className="app__wrapper_img" style={{flexDirection: 'column'}}>
                <img src={images.jiggs} alt="header_img" />
            </div>
        </Div100vh>
    </Div100vh>

);

export default Header;
