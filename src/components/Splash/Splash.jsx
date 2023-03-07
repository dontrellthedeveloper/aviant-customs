import React, {useEffect} from 'react';
import './Splash.scss';
import AutoPlaySilentVideo from "../VideoSlient";
import Div100vh from 'react-div-100vh'
import { use100vh } from 'react-div-100vh'

const Splash = () => {
    const [showElement, setShowElement] = React.useState(true);

    useEffect(() => {
        setTimeout(function () {
            setShowElement(false);
        }, 10000);
    }, []);

    return (

        <div>


        {showElement ? (

            <Div100vh className="preloader">
                {/*<div className="status">*/}
                <Div100vh className='video-bg'>
                    {/*<div className="video-overlay"></div>*/}
                    <AutoPlaySilentVideo/>
                </Div100vh>
                {/*</div>*/}
            </Div100vh>

            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Splash;
