import React, {useState,useEffect} from 'react';
import './Splash.scss';
import AutoPlaySilentVideo from "../VideoSlient";
import Div100vh from 'react-div-100vh'
import { use100vh } from 'react-div-100vh'
import ScrollToTop from "../../utils/ScrollToTop";
import {motion, AnimatePresence} from "framer-motion";




const itemVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1,
    transition: {duration: 1}},
    exit: {opacity: 0}
}





const Splash = () => {
    const [fadeElement, setFadeElement] = useState(true);
    const [showElement, setShowElement] = useState(true);
    const [visible, setVisible] = useState(true);

    const removeElement = () => {
        setVisible((prev) => !prev);
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

        <div>



        {showElement ? (
            <AnimatePresence>

                    <div
                        className={`${fadeElement ? "" : "fade-out fade-2"} ${visible ? "" : "fade-out-2 fade-2"}   `}

                    >


                    <Div100vh className="preloader">
                        <Div100vh className='video-bg'>
                            <div className="video-overlay"></div>
                            <AutoPlaySilentVideo/>
                            <Div100vh className="video-text">

                                <h2 className='video-head-text'>
                                    {/*<button>Click To Enter</button>*/}
                                    <button onClick={removeElement} type="button" className="custom__button" style={{backgroundColor: 'transparent', border: '2px solid #fff', color: '#fff'}}>Click To Enter</button>
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
    );
};

export default Splash;
