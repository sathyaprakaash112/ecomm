import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 @SP Trends All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram
          onClick={() =>
            openInNewTab("https://www.instagram.com/__.bad__liar.__/")
          }
        />
        <AiOutlineTwitter
          onClick={() =>
            openInNewTab("https://www.twitter.com/sathyaprakaash112/")
          }
        />
      </p>
    </div>
  );
};
const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
export default Footer;
