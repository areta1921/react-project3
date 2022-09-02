import React from "react";
import image from "../image/linkedin.png";
import images from "../image/github.png";
const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/abraham-reta-b39a921a4/" alt="oPPS">
        <img src={image} alt="" />
      </a>
      <a href="https://github.com/areta1921" alt="oPPS">
        <img src={images} alt="" />
      </a>
    </div>
  );
};

export default Footer;
