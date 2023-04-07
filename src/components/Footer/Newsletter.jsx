import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = ({form}) => (
    <form action="https://formspree.io/f/mbjepjpe" method="POST">
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
                <input type="text" name="name" placeholder="Name" />

            </div>
            <div className="app__newsletter-input flex__center">
                <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="app__newsletter-input flex__center">
                <input  type="phone" name="phone" placeholder="Phone Number" />
            </div>
            <div className="app__newsletter-input flex__center">
                <input name="subject" type="text" placeholder="Subject" />
            </div>
            <div className="app__newsletter-input flex__center">
             <textarea rows="8" name="message"
                       placeholder="Message"></textarea>
                {/*<input type="textarea" placeholder="Enter your email address" />*/}
            </div>
            <div className="app__newsletter-input flex__center">
                <button type="submit" className="custom__button">Submit</button>
            </div>
        </div>
    </form>

);

export default Newsletter;
