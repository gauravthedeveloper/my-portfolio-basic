import React from "react";
import CV from "../../Assets/cv.pdf";
import "./Header.css";
const Twobuttons = () => {
  return (
    <div className="twobuttons">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Scroll Down
      </a>
    </div>
  );
};

export default Twobuttons;
