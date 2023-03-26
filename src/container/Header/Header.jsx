import React, {useEffect, useLayoutEffect, useState} from 'react';
import Div100vh from 'react-div-100vh';
import videoBG from '../../assets/aviant-customs.mp4'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.scss';
import StarsCanvas from "../../components/canvas/Stars";
import StarsCanvas2 from "../../components/canvas/Stars2";
import {client} from "../../client";

const Header = () => {
    const [starsOff, setStarsOff] = useState(true);

    useLayoutEffect(() => {
        const resolution = window.innerWidth;

        if (resolution < 1024) {
            setStarsOff(false)
        }
    }, [])



    const [header, setHeader] = useState([]);


    useEffect(() => {
        client.fetch(`*[_type == "header"] | order(orderRank) {
            title,
            _id,
            caption,
            description,
           
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

        }`).then((data) => setHeader(data))
            .catch(console.error)
    }, []);

    console.log(header)


    return (
        <div className='app__header' style={{height: '100vh',  borderBottom: '1px solid rgb(224, 204, 132)'}}>

            {header.map((head, index) => (
                <div className=" app__wrapper section__padding"
                     style={{maxWidth: '1400px'}}
                     id="home"
                     key={head.name + index}
                >


                    <video className="home-bg-video"
                           src={head?.video?.asset.url ? head?.video?.asset.url : videoBG}
                           poster={head?.thumbnail?.asset.url}
                           autoPlay
                           loop
                           muted
                           playsInline>
                    </video>



                    {/* Overlay */}
                    <div className="home-overlay"></div>


                    <div className="app__wrapper_info" style={{zIndex: '5'}}>
                        {head.caption && (
                            <SubHeading title={head.caption} />
                        )}
                        {head.title && (
                        <h1 className="app__header-h1">{head.title}</h1>
                        )}
                        {head.description && (
                        <p className="p__opensans" style={{ margin: '2rem 0' }}>{head.description} </p>
                        )}
                        <button type="button" className="custom__button">Get a Quote</button>
                    </div>

                    {/*<div className="app__wrapper_img custom__mobile-header" style={{flexDirection: 'column', zIndex: '5', display: 'none'}}>*/}
                    {/*    <img src={images.jiggs} alt="header_img" />*/}
                    {/*</div>*/}
                </div>

            ))}

            {/*{starsOff && <StarsCanvas/>}*/}

        </div>

    );

}

export default Header;
