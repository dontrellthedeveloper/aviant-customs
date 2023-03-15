

import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Vid3.scss';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";
import videoBg from '../../assets/P-TENNIS.mp4';
import Div100vh from 'react-div-100vh'
import videothumb from "../../assets/chainsthumb.png";

const Chef = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef2 = useRef(null);
    const [isVideoMuted, setIsVideoMuted] = useState(false);


    const [starsOff, setStarsOff] = useState(true);

    useLayoutEffect(() => {
        const resolution = window.innerWidth;

        if (resolution < 1024) {
            setStarsOff(false)
        }
    }, [])

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
        <div
            style={{borderTop: '1px solid rgb(224, 204, 132)'}}
            className='app__bg '
            id='chains'
        >
            <div className="app__wrapper section__padding"
                 style={{
                     // zIndex: -2,
                     position: 'relative',

                     maxWidth: '1400px'
                 }}
            >
                {/*<div style={{display: 'flex', maxWidth: '1200px', margin: '0 auto'}}>*/}
                <div className="app__wrapper_img app__wrapper_img-reverse" style={{zIndex: 10}}>

                    <video
                        loop
                        src={videoBg}
                        ref={videoRef2}
                        // onClick={onVideoPress}
                        controls
                        poster={videothumb}
                        // onMouseOver={videoHoverOn}
                        // onMouseOut={videoHoverOff}
                        autoPlay
                        style={{border: '15px solid #e0cc84' }}
                        className='
                                video__styles
                                h-[300px]
                                md:h-[400px]
                                lg:h-[528px]
                                {/*w-[200px] */}
                                w-full
                                rounded-2xl cursor-pointer bg-gray-100'
                    ></video>
                    {/*<img src={images.jiggs} alt="chef_image" />*/}
                </div>
                <div className="app__wrapper_info">
                    <SubHeading title="(Ex, 22in Chains)"/>
                    <h1 className="headtext__cormorant">(Video Title)</h1>

                    <div className="app__chef-content">
                        {/*<div className="app__chef-content_quote">*/}
                        {/*    <img src={images.quote} alt="quote_image"/>*/}
                        {/*    <p className="p__opensans">(Optional Quote)*/}
                        {/*        .</p>*/}
                        {/*</div>*/}
                        <p className="p__opensans"> (Give a brief description of the jewelery piece in the video.) </p>
                    </div>

                    <div className="app__chef-sign">

                        <p className="p__opensans">Designed by</p>
                        <p>Moliere Neptune</p>
                        <img src={images.sign} alt="sign_image"/>
                    </div>
                </div>
                {/*</div>*/}






            </div>

            {starsOff && <StarsCanvas2 />}

        </div>

    );
}

export default Chef;
