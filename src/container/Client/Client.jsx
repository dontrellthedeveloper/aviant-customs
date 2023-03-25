import React, {useEffect, useState} from 'react';
import JewelryClient from "../JewelryClient/JewelryClient";
import JewelryGallery from "../JewelryGallery/JewelryGallery";

import {urlFor, client} from "../../client";

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

        }`).then((data) => setJewelry(data))
            .catch(console.error)
    }, []);

    console.log(jewelry);

    return (
        <>
           {jewelry.map((jewel, index) => (
             <JewelryClient jewel={jewel} key={jewel.name + index} />
           ))}
        </>
    );
};

export default Client;
