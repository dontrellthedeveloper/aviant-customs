import React, {useState, useEffect, useRef} from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import StarsCanvas2 from "../../components/canvas/Stars2";
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import JewelryGallery from "../JewelryGallery/JewelryGallery";


const JewelryClient = ({jewel}) => {

    const [playing, setPlaying] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const videoRef2 = useRef(null);
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const [videoMobile, setVideoMobile] = useState(false)


    const [starsOff, setStarsOff] = useState(true);


    const onVideoPress = () => {
        if (playing) {
            videoRef2?.current?.pause();
            setPlaying(false);
        } else {
            videoRef2?.current?.play();
            setPlaying(true);
        }
    }


    const videoHoverOn = () => {
        videoRef2?.current?.play();
        setPlaying(true);
    };

    const videoHoverOff = () => {
        videoRef2?.current?.pause();
        setPlaying(false);
    }

    useEffect(() => {
        const resolution = window.innerWidth;

        if (resolution < 1024) {
            setVideoMobile(true)
        }
    }, [])



    useEffect(() => {
        const resolution = window.innerWidth;

        if (resolution < 1024) {
            setStarsOff(false)
        }
    }, [])


    useEffect(() => {
        const resolution = window.innerWidth;

        if (resolution > 1023) {
            const timer = setTimeout(function () {
                let options = {
                    rootMargin: "0px",
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
            }, 500);
            return () => clearTimeout(timer);
        }
    });

    // useEffect(() => {
    //     if (videoRef2?.current) {
    //         videoRef2.current.muted = isVideoMuted;
    //     }
    // }, [isVideoMuted]);

    return (
        <div>
            {jewel.video && (
                <div style={{position: "relative"}}>
                    <div className='app__bg '>
                        <div className={`app__wrapper2 section__padding ${jewel.vidReverse ? 'reverse' : ''} `} style={{ position: 'relative', maxWidth: '1400px'}}>
                            <div className="app__wrapper_info client__mobile">
                                {jewel.name && (
                                    <h1 className="headtext__cormorant">{jewel.name}</h1>
                                )}

                                {jewel.caption && (
                                    <SubHeading title={jewel.caption}/>
                                )}
                            </div>
                            <div className="app__wrapper_img app__wrapper_img-reverse relative" style={{zIndex: 10}}>

                                {videoMobile &&
                                    <video
                                    loop
                                    src={jewel?.video?.asset.url}
                                    ref={videoRef2}
                                    onClick={onVideoPress}
                                    poster={jewel?.thumbnail?.asset.url ? jewel?.thumbnail?.asset.url : ''}
                                    style={{border: '5px solid #e0cc84' }}
                                    className={`${jewel.vidPortrait ? 'video__styles' : 'video__observer-styles'}`}>
                                    </video>
                                }

                                {!videoMobile &&
                                    <video
                                    loop
                                    src={jewel?.video?.asset.url}
                                    ref={videoRef2}
                                    controls
                                    poster={jewel?.thumbnail?.asset.url ? jewel?.thumbnail?.asset.url : ''}
                                    style={{border: '5px solid #e0cc84' }}
                                    className={`${jewel.vidPortrait ? 'video__styles' : 'video__observer-styles'} `}>
                                    </video>
                                }

                                {videoMobile && (
                                    <div className="video__play-styles">
                                    {playing ? (
                                        <button style={{display: 'none'}} className='video__text-styles' onClick={onVideoPress}>
                                            <BsFillPauseFill className='' />
                                        </button>
                                    ) : (
                                        <button  className='video__text-styles' onClick={onVideoPress}>
                                            <BsFillPlayFill className='' />
                                        </button>
                                    )}
                                    {isVideoMuted ? (
                                        <button className='video__text-styles' onClick={() => setIsVideoMuted(false)}>
                                            <HiVolumeOff className='' />
                                        </button>
                                    ) : (
                                        <button style={{display: 'none'}} className='video__text-styles' onClick={() => setIsVideoMuted(true)}>
                                            <HiVolumeUp className='' />
                                        </button>
                                    )}
                                    </div>
                                )}
                            </div>
                            {jewel.description && (
                                <div className="app__wrapper_info client__mobile">
                                    <div className="app__chef-content">
                                        <p className="p__opensans"> {jewel.description} </p>
                                    </div>
                                </div>
                            )}

                            <div className="app__wrapper_info client__desktop">
                                {jewel.caption && (
                                    <SubHeading title={jewel.caption}/>
                                )}
                                {jewel.name && (
                                    <h1 className="headtext__cormorant">{jewel.name}</h1>
                                )}

                                {jewel.description && (
                                    <div className="app__chef-content">
                                        <p className="p__opensans"> {jewel.description} </p>
                                    </div>
                                )}

                                <div className="app__chef-sign">
                                    <p className="p__opensans">Designed by</p>
                                    <p>Moliere Neptune</p>
                                    <img src={images.sign} alt="sign_image"/>
                                </div>
                            </div>
                        </div>
                    {/*{starsOff && <StarsCanvas2 />}*/}
                    </div>
                </div>
            )}

            <JewelryGallery jewel={jewel} />
        </div>
    );
}

export default JewelryClient;
