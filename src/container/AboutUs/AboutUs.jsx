import React, {useEffect, useLayoutEffect, useState} from 'react';

import { images } from '../../constants';
import './AboutUs.scss';
import StarsCanvas from "../../components/canvas/Stars2";
import {SubHeading} from "../../components";
import {client} from "../../client";

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
            image{
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
            <div className="app__aboutus app__bg flex__center section__padding scroll__margin" style={{zIndex: '-2', position: 'relative', borderTop: '1px solid rgb(224, 204, 132)'}}   id="about" key={about.name + index}>

                {about.image && (
                    <div className="app__aboutus-overlay flex__center">
                        <img src={about?.image?.asset.url} alt="G_overlay" />
                    </div>
                )}
                <div className="app__aboutus-content flex__center">
                    <div className="app__aboutus-content_about">
                        {about.title && (
                            <h1 className="headtext__cormorant">{about.title}</h1>
                        )}
                        <img src={images.crown} alt="about_spoon" className="spoon__img" />
                        {about.description1 && (
                            <p className="p__opensans">{about.description1}</p>
                        )}
                        <button type="button" className="custom__button">Know More</button>
                    </div>

                    <div className="app__aboutus-content_knife flex__center">
                        {/*<img src={images.knife} alt="about_knife" />*/}
                    </div>

                    <div className="app__aboutus-content_history">
                        {about.title2 && (
                            <h1 className="headtext__cormorant">{about.title2}</h1>
                        )}
                        <img src={images.crown} alt="about_spoon" className="spoon__img" />
                        {about.description2 && (
                            <p className="p__opensans">{about.description2}</p>
                        )}
                        <button type="button" className="custom__button">Know More</button>
                    </div>
                </div>
                {/*{starsOff && <StarsCanvas/>}*/}
            </div>
            ))}
        </div>

    );
}

export default AboutUs;
