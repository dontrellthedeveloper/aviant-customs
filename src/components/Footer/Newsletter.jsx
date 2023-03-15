import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = () => (
    <div className="app__newsletter" style={{zIndex: 60}}>
        <div className="app__newsletter-heading">
            <SubHeading title="Contact Form" />
            <h1 className="headtext__cormorant">Contact Us</h1>
            <p className="p__opensans">For more information, please fill out our contact
                form.</p>
        </div>
        <div className="app__newsletter-input flex__center">
            <input type="text" placeholder="Name" />

        </div>
        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder="Email Address" />
        </div>
        <div className="app__newsletter-input flex__center">
            <input type="text" placeholder="Phone Number" />
        </div>
        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder="Subject" />
        </div>
        <div className="app__newsletter-input flex__center">
             <textarea rows="8" name="message"
                       placeholder="Message"></textarea>
            {/*<input type="textarea" placeholder="Enter your email address" />*/}
        </div>
        <div className="app__newsletter-input flex__center">
            <button type="button" className="custom__button">Submit</button>
        </div>
    </div>
);

export default Newsletter;
