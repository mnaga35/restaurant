import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMnue, setToggleMnue] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#About">About</a>
        </li>
        <li className="p__opensans">
          <a href="#Menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#Awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMnue(true)}
        />

        {toggleMnue && (
          <div className="app__navbar-smallscreen_overlay flex__center Slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMnue(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#About">About</a>
              </li>
              <li className="p__opensans">
                <a href="#Menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#Awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
