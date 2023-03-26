import React, {useRef, useEffect, useState} from "react"
import videoBg from '../assets/SPLASH_ANIMATION.mp4';
import {client} from "../client";

export default function AutoPlaySilentVideo({drip}) {



    return (
                <video

                    poster={drip?.thumbnail?.asset.url}
                    loop
                    autoPlay
                    // src={drip?.video?.asset.url}
                    muted
                    playsInline>
                    <source src={drip?.video?.asset.url} type="video/mp4"/>
                </video>
    );
}
