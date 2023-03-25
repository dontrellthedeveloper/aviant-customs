import React, {useState} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {TbListDetails} from 'react-icons/tb';
import {MdOutlinePhotoCamera} from 'react-icons/md'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery2.scss';



const Gallery = () => {

    const imagesG = [images.p1, images.p2, images.p3, images.p4];

    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [imageToShow, setImageToShow] = useState('')

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    const showImage = (image) => {
        //set imageToShow to be the one that's been clicked on
        setImageToShow(image);
        //set lightbox visibility to true
        setLightBoxDisplay(true);
    };

    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    const showNext = (e) => {
        e.stopPropagation()
        let currentIndex = imagesG.indexOf(imageToShow)
        if(currentIndex >= imagesG.length - 1) {
            // setLightBoxDisplay(false)
            let nextImage = imagesG[0]
            setImageToShow(nextImage)
        }
        else {
            let nextImage = imagesG[currentIndex + 1]
            setImageToShow(nextImage)
        }
    }

    const showPrev = (e) => {
        e.stopPropagation()
        let currentIndex = imagesG.indexOf(imageToShow)
        if(currentIndex <= 0) {
            // setLightBoxDisplay(false)
            let nextImage = imagesG[imagesG.length - 1]
            setImageToShow(nextImage)
        }
        else {
            let nextImage = imagesG[currentIndex - 1]
            setImageToShow(nextImage)
        }
    }



    return (

        <div className="app__gallery flex__center section__padding"
             style={{borderTop: '1px solid rgb(224, 204, 132)'}}
        >
            {/*<div style={{display: 'flex', maxWidth: '1200px', margin: '0 auto'}}>*/}
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {imagesG.map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} onClick={() => showImage(image)}   alt="gallery_image" />
                            <MdOutlinePhotoCamera onClick={() => showImage(image)} className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>
            <div className="app__gallery-content" style={{alignItems: 'flex-end'}}>
                <SubHeading title="Priya Piece" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>(Here is where you can enter a description.)</p>
                <button type="button" className="custom__button">View More</button>
            </div>


            { lightboxDisplay ?
                <div id="lightbox" onClick={hideLightBox}>


                    <button className='lightbox-button' onClick={showPrev}>⭠</button>

                        <img id="lightbox-img" src={imageToShow}></img>


                    <button className='lightbox-button' onClick={showNext}>⭢</button>
                </div>
                : '' }


            {/*</div>*/}
        </div>
    );
};

export default Gallery;
