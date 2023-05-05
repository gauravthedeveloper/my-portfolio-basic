import React from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { TbClover } from "react-icons/tb";
const Nav = () => {
  return (
    <nav>
      <a href="#">
        <ImHome />
      </a>
      <a href="#about">
        <BiUser />
      </a>
      <a href="#experiences">
        <BiBook />
      </a>
      <a href="#testimonials">
        <TbClover />
      </a>
      <a href="#contact">
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
