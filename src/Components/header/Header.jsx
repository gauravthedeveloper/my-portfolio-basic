import React from "react";
import Twobuttons from "./Twobuttons";
import ME from "../../Assets/ME2.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Gourab Modak</h1>
        <h5 className="text-light">A Fierce Competitive Programmer</h5>
        <Twobuttons />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
