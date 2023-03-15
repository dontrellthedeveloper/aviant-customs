import React, {useState, useEffect} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai'

import images from '../../constants/images';

import './Navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);


    return (
    <nav className={scroll ? 'app__navbar-scroll' : 'app__navbar'}>
      <div className="app__navbar-logo">
        <img src={images.logo2} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#full">Full Set</a></li>
        <li className="p__opensans"><a href="#pendants">Pendants</a></li>
        <li className="p__opensans"><a href="#chains">Chains</a></li>
        <li className="p__opensans"><a href="#rings">Rings</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      {/*<div className="app__navbar-login">*/}
      {/*  <a href="#login" className="p__opensans">Log In / Registration</a>*/}
      {/*  <div />*/}
      {/*  <a href="/" className="p__opensans">Book Table</a>*/}
      {/*</div>*/}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#full" onClick={() => setToggleMenu(false)}>Full</a></li>
              <li><a href="#pendants" onClick={() => setToggleMenu(false)}>Pendants</a></li>
              <li><a href="#chains" onClick={() => setToggleMenu(false)}>Chains</a></li>
              <li><a href="#rings" onClick={() => setToggleMenu(false)}>Rings</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
