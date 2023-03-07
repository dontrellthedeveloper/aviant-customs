import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import StarsCanvas from "../../components/canvas/Stars2";
import {SubHeading} from "../../components";

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" style={{zIndex: '-2', position: 'relative'}}  id="about">

        {/*<div className="app__wrapper_img">*/}
        {/*    <img src={images.jiggs} alt="header_img" />*/}
        {/*</div>*/}

        {/*<div className="app__wrapper_info">*/}
        {/*    <SubHeading title="Chase the new flavour" />*/}
        {/*    <h1 className="app__header-h1">The Key To Fine Dining</h1>*/}
        {/*    <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>*/}
        {/*    <button type="button" className="custom__button">Explore Menu</button>*/}
        {/*</div>*/}




        <div className="app__aboutus-overlay flex__center">
            <img src={images.logo2} alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="about_knife" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>
        </div>
        <StarsCanvas />
    </div>
);

export default AboutUs;
