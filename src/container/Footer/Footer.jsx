

import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";

const Footer = () => (
    <>
        <div className="app__footer section__padding" style={{
            // zIndex: '2',
            position: 'relative'}} id="login">
            <FooterOverlay />
            <Newsletter />

            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contact Us</h1>
                    <p className="p__opensans">(Enter Contact Number)</p>
                    {/*<p className="p__opensans">+1 212-344-1230</p>*/}
                    {/*<p className="p__opensans">+1 212-555-1230</p>*/}
                </div>

                <div className="app__footer-links_logo">
                    <img src={images.logo2} style={{width: '150px', marginBottom: '40px'}} alt="footer_logo" />
                    <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                    <img src={images.crown} className="spoon__img" style={{ marginTop: 15 }} />
                    <div className="app__footer-links_icons">
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>

                <div className="app__footer-links_work">
                    <h1 className="app__footer-headtext">Working Hours</h1>
                    <p className="p__opensans">Monday-Friday:</p>
                    <p className="p__opensans">(Contact Hrs?) Ex, 08:00 am - 8:00 pm</p>
                    <p className="p__opensans">Saturday-Sunday:</p>
                    <p className="p__opensans">10:00 am - 12:00 pm</p>
                </div>
            </div>

            <div className="footer__copyright">
                <p className="p__opensans">2023 Aviant Customs. All Rights reserved.</p>
            </div>

            <StarsCanvas/>

        </div>

    </>

);

export default Footer;
