

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";

const Chef = () => (
    <div className="app__bg app__wrapper section__padding" style={{zIndex: '-2', position: 'relative'}} >
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef_image" />
        </div>
        <div className="app__wrapper_info">
            <SubHeading title="Chef's word" />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img src={images.quote} alt="quote_image" />
                    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                </div>
                <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
            </div>

            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={images.sign} alt="sign_image" />
            </div>
        </div>
        <StarsCanvas2 />
    </div>
);

export default Chef;