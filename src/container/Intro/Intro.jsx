import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

// import { meal } from '../../constants';
import './Intro.css';
import videothumb from '../../assets/video_thumb.png'

import videoBg from '../../assets/SPLASH_ANIMATION.mp4';

const Intro = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef();

    return (
        <div className="app__video">
            <video
                ref={vidRef}
                src={videoBg}
                poster={videothumb}
                type="video/mp4"
                loop
                controls={false}
                muted
            />
            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={() => {
                        setPlayVideo(!playVideo);
                        if (playVideo) {
                            vidRef.current.pause();
                        } else {
                            vidRef.current.play();
                        }
                    }}
                >
                    {playVideo ? (
                        <BsPauseFill color="#fff" fontSize={30} />
                    ) : (
                        <BsFillPlayFill color="#fff" fontSize={30} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Intro;
