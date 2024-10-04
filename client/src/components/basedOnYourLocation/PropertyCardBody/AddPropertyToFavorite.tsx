import React from "react";
import { FaRegHeart } from "react-icons/fa";

const AddPropertyToFavorite = () => {
  return (
    <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] md:border-[2px] rounded-full absolute top-[-30px] md:-top-[15px] right-[-15px] flex items-center justify-center cursor-pointer">
      <FaRegHeart className="h-[22px] w-[22px] text-light-60" />
    </div>
  );
};
export default AddPropertyToFavorite;
