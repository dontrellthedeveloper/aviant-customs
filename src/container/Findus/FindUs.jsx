import React, {useEffect, useRef, useState} from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";

import Div100vh from "react-div-100vh";

const FindUs = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef2 = useRef(null);
    const [isVideoMuted, setIsVideoMuted] = useState(false);

    useEffect(() => {
        let options = {
            rootMargin: "0px",
            // threshold: [0.25, 0.75]
            threshold: [0.90, 1]
        };

        let handlePlay = (entries, observe) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef2?.current?.play();
                } else {
                    videoRef2?.current?.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef2?.current);
    });

    useEffect(() => {
        if (videoRef2?.current) {
            videoRef2.current.muted = isVideoMuted;
        }
    }, [isVideoMuted]);

    return (
        <Div100vh
            style={{borderTop: '1px solid rgb(224, 204, 132)'}}
            className='app__bg '
        >
        <div className="app__wrapper section__padding" style={{
            // zIndex: '-2',
            position: 'relative',
            maxWidth: '1400px'
        }}
             id="contact">
            {/*<div style={{display: 'flex', margin: '0 auto'}}>*/}

                {/*<div className="app__wrapper_info">*/}
                {/*    <SubHeading title="Contact"/>*/}
                {/*    <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>*/}
                {/*    <div className="app__wrapper-content">*/}
                {/*        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>*/}
                {/*        <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>*/}
                {/*        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>*/}
                {/*        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>*/}
                {/*    </div>*/}
                {/*    <button type="button" className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>*/}
                {/*</div>*/}

                <div className="app__wrapper_info">
                <SubHeading title="(Ex, 22in Diamond Pendant)"/>
                <h1 className="headtext__cormorant">(designed to last)</h1>

                <div className="app__chef-content">
                    <div className="app__chef-content_quote">
                        <img src={images.quote} alt="quote_image"/>
                        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
                            .</p>
                    </div>
                    <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis
                        integer curabitur semper sit nunc. </p>
                </div>

                <div className="app__chef-sign">

                    <p className="p__opensans">Designed by</p>
                    <p>Moliere Neptune</p>
                    <img src={images.sign} alt="sign_image"/>
                </div>
            </div>

                <video
                    loop
                    // src={videoBg}
                    // ref={videoRef2}
                    // onClick={onVideoPress}
                    controls
                    // onMouseOver={videoHoverOn}
                    // onMouseOut={videoHoverOff}
                    autoPlay
                    style={{width: '350px', border: '15px solid #e0cc84', zIndex: 10 }}
                    className='
                                    {/*lg:w-[600px]*/}
                                    h-[300px]
                                    md:h-[400px]
                                    lg:h-[528px]
                                    {/*w-[200px] */}
                                    w-full
                                    rounded-2xl cursor-pointer bg-gray-100'
                ></video>
            {/*</div>*/}
            {/*<StarsCanvas2/>*/}

        </div>
        </Div100vh>
    );
}

export default FindUs;
