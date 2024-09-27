import React from "react";
import { FaInstagram, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

//TODO : add logic of social media links
const SocialLinks = () => {
  return (
    <div className="w-full flex justify-center gap-[15px] mt-[10px]">
      <FaInstagram className="w-[26px] h-[26px] text-socialMedia-instagram" />
      <FaSquareXTwitter className="w-[26px] h-[26px]" />
      <FaLinkedin className="w-[26px] h-[26px] text-socialMedia-linkedIn" />
    </div>
  );
};
export default SocialLinks;
