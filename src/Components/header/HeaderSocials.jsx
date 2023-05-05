import React from "react";
import "./Header.css";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { SiHackerrank } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/gourabmodak/" target="_blank">
        {" "}
        <GrLinkedin />
      </a>

      <a href="https://github.com/gauravthedeveloper" target="_blank">
        {" "}
        <FaGithub />
      </a>
      <a href="https://codeforces.com/profile/sectumsempra07" target="_blank">
        {" "}
        <SiCodeforces />
      </a>
      <a href="https://www.codechef.com/users/sectumsempra07" target="_blank">
        <SiCodechef />
      </a>
      <a href="https://www.hackerrank.com/sectumsempra07" target="_blank">
        <SiHackerrank />
      </a>
      <a href="https://www.facebook.com/gourabmodak07/" target="_blank">
        {" "}
        <SiFacebook />
      </a>
      <a href="https://www.instagram.com/gauravshines/" target="_blank">
        {" "}
        <RiInstagramFill />
      </a>
      <a href="https://twitter.com/gourabmodak28" target="_blank">
        {" "}
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
