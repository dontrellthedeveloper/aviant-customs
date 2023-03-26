

import React, {useEffect, useLayoutEffect, useState} from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";
import {client} from "../../client";

const Footer = () => {
    const [starsOff, setStarsOff] = useState(true);


    const [contact, setContact] = useState([]);


    useEffect(() => {
        client.fetch(`*[_type == "contact"] | order(orderRank) {
            title,
            caption,
            description,
            phone,
            hours,
            tag,
            instagram,
            copyright,
            logo {
                asset->{
                    _id,
                    url
                }
            },

        }`).then((data) => setContact(data))
            .catch(console.error)
    }, []);


    useLayoutEffect(() => {
        const resolution = window.innerWidth;

        if (resolution < 1024) {
            setStarsOff(false)
        }
    }, [])


    return  (
        <div id='contact' className='scroll__margin'>
            {contact.map((form, index) => (
            <div className="app__footer section__padding" style={{
                // zIndex: '2',

                position: 'relative'}} id="login" key={form.name + index}>
                <FooterOverlay />
                <Newsletter form={form} />

                <div className="app__footer-links">
                    <div className="app__footer-links_contact">
                        <h1 className="app__footer-headtext">Contact Us</h1>
                        {form.phone && (
                             <p className="p__opensans">{form.phone}</p>
                        )}
                        {/*<p className="p__opensans">+1 212-344-1230</p>*/}
                        {/*<p className="p__opensans">+1 212-555-1230</p>*/}
                    </div>

                    <div className="app__footer-links_logo">
                        {form.logo && (
                            <img src={form?.logo?.asset.url} style={{width: '150px', marginBottom: '40px'}} alt="footer_logo" />
                        )}
                        {form.tag && (
                            <p className="p__opensans">{form.tag}</p>
                        )}
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
                        {form.hours && (
                            <p className="p__opensans">{form.hours}</p>
                        )}
                    </div>
                </div>
                {form.copyright && (
                    <div className="footer__copyright">
                        <p className="p__opensans">{form.copyright}</p>
                    </div>
                )}
                {/*{starsOff && <StarsCanvas/>}*/}

            </div>
            ))}
        </div>

    );
}

export default Footer;
