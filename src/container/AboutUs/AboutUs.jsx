import React, {useEffect, useLayoutEffect, useState} from 'react';

import { images } from '../../constants';
import './AboutUs.scss';
import StarsCanvas from "../../components/canvas/Stars2";
import {SubHeading} from "../../components";
import {client} from "../../client";
import DiamondCanvas from "../../components/canvas/Diamond";
import DiamondCanvas2 from "../../components/canvas/Diamond2";
import Diamond3 from "../../components/canvas/Diamond3";
import Diamond2 from "../../components/canvas/Diamond2";
import {ReadMore} from "../../components/ReadMore";
import {PortableText} from "@portabletext/react";
import doc from  './doc.json'

const AboutUs = () => {
    const [starsOff, setStarsOff] = useState(true);


    const [aboutUs, setAboutUs] = useState([]);


    useEffect(() => {
        client.fetch(`*[_type == "about"] | order(orderRank) {
            title,
            title2,
            _id,
            description1,
            description2,
            oneSection,
            embedded,
            paypalBtn,
            spacingXl,
            image{  
                asset->{
                    _id,
                    url
                }
            },
            image2{
                asset->{
                    _id,
                    url
                }
            },

        }`).then((data) => setAboutUs(data))
            .catch(console.error)
    }, []);

    console.log(aboutUs)



    useLayoutEffect(() => {
        const resolution = window.innerWidth;

        if (resolution < 1024) {
            setStarsOff(false)
        }
    }, [])

    return (
        <div>
            {aboutUs.map((about, index) => (
            <div className={` ${about.spacingXl ? 'app__aboutus-xl' : 'app__aboutus'}  app__bg flex__center section__padding scroll__margin`} style={{ position: 'relative', borderTop: '1px solid rgb(224, 204, 132)'}}   id="about" key={about.name + index}>

                {/*{about.image2 && (*/}
                {/*    <div className="app__aboutus-overlay flex__center">*/}
                {/*        <img src={about?.image2?.asset.url} alt="G_overlay" />*/}
                {/*    </div>*/}
                {/*)}*/}

                {/*<div className=' flex__center'>*/}
                {/*    <Diamond3/>*/}
                {/*</div>*/}


                {/*<DiamondCanvas/>*/}
                <div className="app__aboutus-content flex__center" style={{maxWidth: '1200px'}}>
                    <div className="app__aboutus-content_about">
                        {about.title && (
                            <h1 className="headtext__cormorant">{about.title}</h1>
                        )}
                        <img src={images.crown} alt="about_spoon" className="spoon__img" />


                        {about.description1 && (
                            <p className="p__opensans" style={{textAlign: 'center'}}>
                                <ReadMore>
                                {about.description1}
                                </ReadMore>
                            </p>
                        )}

                        {about.paypalBtn && (
                            <form style={{marginTop: '40px', marginBottom: '40px'}} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick"/>
                                <input type="hidden" name="hosted_button_id" value="4FUAPDE7RC3YC"/>
                                <input style={{width: '260px'}} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                            </form>
                        )}


                        {about.image && (
                        <div className=" flex__center">
                            <img style={{width: '300px'}} src={about?.image?.asset.url} alt="G_overlay" />
                        </div>
                        )}

                        {/*{about.content && (*/}
                        {/*    <div className=" flex__center">*/}
                        {/*        {about.content}*/}
                        {/*    </div>*/}
                        {/*)}*/}






                        {/*<a href="#contact">*/}
                        {/*    <button type="button" className="custom__button">Know More</button>*/}
                        {/*</a>*/}
                    </div>

                    {/*<div className="app__aboutus-content_knife flex__center">*/}
                        {/*<img src={images.knife} alt="about_knife" />*/}
                        {/*<div style={{width: '400px', height: '400px'}}>*/}

                        {/*</div>*/}
                    {/*</div>*/}

                    <div className={`diamond__about-size ${about.oneSection ? 'one-section__display' : ''} `} style={{marginLeft: '50px', marginRight: '50px'}}>
                        <Diamond2/>
                    </div>


                    <div className={`app__aboutus-content_history ${about.oneSection ? 'one-section__display' : ''}`}>
                        {about.title2 && (
                            <h1 className="headtext__cormorant">{about.title2}</h1>
                        )}
                        <img src={images.crown} alt="about_spoon" className="spoon__img" />
                        {about.description2 && (
                            <p className="p__opensans">
                                <ReadMore>
                                {about.description2}
                                </ReadMore>
                            </p>
                        )}
                        {/*<a href="#contact">*/}
                        {/*<button type="button"  className="custom__button">Know More</button>*/}
                        {/*</a>*/}
                    </div>
                </div>
                {/*{starsOff && <StarsCanvas/>}*/}

            </div>
            ))}



        </div>

    );
}

export default AboutUs;
