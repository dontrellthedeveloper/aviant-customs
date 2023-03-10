

import React, {useState, useEffect, useRef} from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";
import videoBg from '../../assets/PRIYA_REEL.mp4';

const Chef = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef2 = useRef(null);
    const [isVideoMuted, setIsVideoMuted] = useState(false);


    // const onVideoPress = () => {
    //     if (playing) {
    //         videoRef2?.current?.pause();
    //         setPlaying(false);
    //     } else {
    //         videoRef2?.current?.play();
    //         setPlaying(true);
    //     }
    // }

    // const videoHoverOn = () => {
    //     videoRef2?.current?.play();
    //     setPlaying(true);
    // };
    //
    // const videoHoverOff = () => {
    //     videoRef2?.current?.pause();
    //     setPlaying(false);
    // }

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
        <div style={{height: '900px'}}>
            <div className="app__bg app__wrapper section__padding" style={{zIndex: -2, position: 'relative'}}>
                <div className="app__wrapper_img app__wrapper_img-reverse" style={{zIndex: 10}}>

                    <video
                        loop
                        src={videoBg}
                        ref={videoRef2}
                        // onClick={onVideoPress}
                        controls
                        // onMouseOver={videoHoverOn}
                        // onMouseOut={videoHoverOff}
                        autoPlay
                        style={{width: '600px', border: '20px solid #e0cc84' }}
                        className='
                                {/*lg:w-[600px]*/}
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
                    <SubHeading title="Chef's word"/>
                    <h1 className="headtext__cormorant">What we believe in</h1>

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
                        <p>Kevin Luo</p>
                        <p className="p__opensans">Chef & Founder</p>
                        <img src={images.sign} alt="sign_image"/>
                    </div>
                </div>
                <StarsCanvas2 />
            </div>
            {/*<video*/}
            {/*    loop*/}
            {/*    src={videoBg}*/}
            {/*    ref={videoRef2}*/}
            {/*    // onClick={onVideoPress}*/}
            {/*    controls*/}
            {/*    // onMouseOver={videoHoverOn}*/}
            {/*    // onMouseOut={videoHoverOff}*/}
            {/*    autoPlay*/}
            {/*    style={{width: '600px', position: 'relative'}}*/}
            {/*    className='*/}
            {/*                    /!*lg:w-[600px]*!/*/}
            {/*                    h-[300px]*/}
            {/*                    md:h-[400px]*/}
            {/*                    lg:h-[528px]*/}
            {/*                    /!*w-[200px] *!/*/}
            {/*                    w-full*/}
            {/*                    rounded-2xl cursor-pointer bg-gray-100'*/}
            {/*></video>*/}
            {/*<StarsCanvas2 />*/}

        </div>

    );
}

export default Chef;