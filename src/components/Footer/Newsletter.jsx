import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = ({form}) => (
    <div className="app__newsletter" style={{zIndex: 60}}>
        <div className="app__newsletter-heading">
            {form.caption && (
                <SubHeading title={form.caption} />
            )}
            {form.title && (
                <h1 className="headtext__cormorant">{form.title}</h1>
            )}
            {form.description && (
                <p className="p__opensans">{form.description}</p>
            )}
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
