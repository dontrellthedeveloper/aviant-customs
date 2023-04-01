import React, {useLayoutEffect, useState} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {TbListDetails} from 'react-icons/tb';
import {MdOutlinePhotoCamera} from 'react-icons/md'

import { SubHeading } from '../../components';
import { images } from '../../constants';


import {urlFor, client} from "../../client";

const Gallery = ({jewel}) => {



    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [imageToShow, setImageToShow] = useState('')


    const [jewelry, setJewelry] = useState([]);

    useLayoutEffect(() => {
        const query = '*[_type == "jewelry"]';



        client.fetch(query)
            .then((data) => {
                setJewelry(data)
            })
    },[])




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




    const imagesG = [jewel?.galleryImg?.asset.url, jewel?.galleryImg2?.asset.url, jewel?.galleryImg3?.asset.url, jewel?.galleryImg4?.asset.url];

    return (
        <div>
            {imagesG && (
                <div className={`app__gallery gallery__direction flex__center section__padding ${jewel.galleryReverse ? 'reverse' : ''} `}
                     style={{borderBottom: '1px solid rgb(224, 204, 132)'}}>
                    <div className="app__gallery-content client__mobile">
                        {jewel.galleryTitle && (
                            <h1 className="headtext__cormorant">{jewel.galleryTitle}</h1>
                        )}
                        {jewel.galleryCaption && (
                            <SubHeading title={jewel.galleryCaption} />
                        )}
                    </div>


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


                    <div className="app__gallery-content client__desktop">
                        {jewel.galleryCaption && (
                            <SubHeading title={jewel.galleryCaption} />
                        )}
                        {jewel.galleryTitle && (
                            <h1 className="headtext__cormorant">{jewel.galleryTitle}</h1>
                        )}
                        {jewel.galleryDesc && (
                            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>{jewel.galleryDesc}</p>
                        )}
                        <button type="button" className="custom__button">View More</button>
                    </div>


                    { lightboxDisplay ?
                        <div id="lightbox" onClick={hideLightBox}>
                            <button className='lightbox-button' onClick={showPrev}>⭠</button>
                            <img id="lightbox-img" src={imageToShow}></img>
                            <button className='lightbox-button' onClick={showNext}>⭢</button>
                        </div>
                        : ''
                    }

                </div>
            )}
        </div>
    );
};

export default Gallery;
