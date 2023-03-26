import React, {useState,useEffect} from 'react';
import './Splash.scss';
import AutoPlaySilentVideo from "../VideoSlient";
import Div100vh from 'react-div-100vh'
import { use100vh } from 'react-div-100vh'
import ScrollToTop from "../../utils/ScrollToTop";
import {motion, AnimatePresence} from "framer-motion";
import {client} from "../../client";




const itemVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1,
    transition: {duration: 1}},
    exit: {opacity: 0}
}





const Splash = () => {
    const [fadeElement, setFadeElement] = useState(true);
    const [showElement, setShowElement] = useState(true);
    const [showScrollbar, setShowScrollbar] = useState(false)
    const [visible, setVisible] = useState(true);


    const [splash, setSplash] = useState([]);


    useEffect(() => {
        client.fetch(`*[_type == "splash"] | order(orderRank) {
            title,
            _id,
            thumbnail{
                asset->{
                    _id,
                    url
                }
            },
            video{
                asset->{
                    _id,
                    url
                }
            },

        }`).then((data) => setSplash(data))
            .catch(console.error)
    }, []);

    console.log(splash)

    const removeElement = () => {
        setVisible((prev) => !prev);
        setShowScrollbar((prev) =>!prev)
    };

    useEffect(() => {
        const timer = setTimeout(function () {

            setShowElement(false);
        }, 11000);
        return () => clearTimeout(timer);


    }, []);


    useEffect(() => {
        const timer = setTimeout(function () {

            setFadeElement(false);
        }, 8200);
        return () => clearTimeout(timer);


    }, []);

    return (
        <>
            {splash.map((drip, index) => (

                <div key={drip.name + index}>

                    {drip.video && (
                        <div id='splash' >
                            {showElement ? (
                                <AnimatePresence>

                                    <div
                                        className={`${fadeElement ? "" : "fade-out-2 fade-2"} ${visible ? "" : "fade-out-2 fade-2"}  ${showScrollbar ? "scroll-bar__styles" : ""} `}

                                    >


                                        <Div100vh className="preloader">
                                            <Div100vh className='video-bg'>
                                                <div className="video-overlay"></div>
                                                <AutoPlaySilentVideo
                                                    drip={drip}
                                                />
                                                <Div100vh className="video-text">

                                                    <h2 className='video-head-text'>
                                                        {/*<button>Click To Enter</button>*/}
                                                        <button onClick={removeElement} type="button" className="custom__button splash__button" style={{}}>{drip.title ? drip.title : 'Click To Enter'}</button>
                                                    </h2>
                                                </Div100vh>
                                            </Div100vh>
                                        </Div100vh>
                                    </div>

                                </AnimatePresence>
                            ) : (
                                // <ScrollToTop/>
                                <div></div>
                            )}

                        </div>
                    )}
                </div>

            ))}
        </>
    );



};

export default Splash;
