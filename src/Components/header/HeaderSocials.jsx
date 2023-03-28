import React from "react";
import "./Header.css";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
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
    </div>
  );
};

export default HeaderSocials;
