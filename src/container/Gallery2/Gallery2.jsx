import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery2.css';

const Gallery = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (

        <div className="app__gallery flex__center section__padding"
             style={{borderTop: '5px solid rgb(224, 204, 132)'}}
        >
            {/*<div style={{display: 'flex', maxWidth: '1200px', margin: '0 auto'}}>*/}
            <div className="app__gallery-content">
                <SubHeading title="Priya Piece" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>(Here is where you can enter a description.)</p>
                <button type="button" className="custom__button">View More</button>
            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {[images.p1, images.p2, images.p3, images.p4].map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} alt="gallery_image" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>


            {/*</div>*/}
        </div>
    );
};

export default Gallery;
