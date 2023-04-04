import React, {useEffect, useState} from 'react';
import JewelryClient from "../JewelryClient/JewelryClient";
import JewelryGallery from "../JewelryGallery/JewelryGallery";

import {urlFor, client} from "../../client";
import Diamond3 from "../../components/canvas/Diamond3";

const Client = () => {
    const [jewelry, setJewelry] = useState([]);


    useEffect(() => {
        client.fetch(`*[_type == "jewelry"] | order(orderRank) {
            name,
            title,
            _id,
            caption,
            description,
            galleryTitle,
            galleryDesc,
            galleryCaption,
            bio2,
            vidReverse,
            galleryReverse,
            vidPortrait,
            vidLandscape,
            footerNote,
            footer,
            thumbnail{
                asset->{
                    _id,
                    url
                }
            },
            video{
                asset->{
                    _id,
                    url
                }
            },
            videoSquare{
                asset->{
                    _id,
                    url
                }
            },
            thumbnailMobile{
                asset->{
                    _id,
                    url
                }
            },
            galleryImg{
                asset->{
                    _id,
                    url
                }
            },
            galleryImg2{
                asset->{
                    _id,
                    url
                }
            },
            galleryImg3{
                asset->{
                    _id,
                    url
                }
            },
            galleryImg4{
                asset->{
                    _id,
                    url
                }
            },
            footerImg{
                asset->{
                    _id,
                    url
                }
            },

        }`).then((data) => setJewelry(data))
            .catch(console.error)
    }, []);

    console.log(jewelry);

    return (
        <div  id="full" className='scroll__margin'>
            {/*<Diamond3/>*/}
           {jewelry.map((jewel, index) => (
             <JewelryClient jewel={jewel} key={jewel.name + index} />
           ))}
        </div>
    );
};

export default Client;
