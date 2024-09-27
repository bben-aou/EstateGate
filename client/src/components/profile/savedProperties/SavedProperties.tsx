import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FormattedMessage } from "react-intl";

const SavedProperties = () => {
  return (
    <div className="bg-profile-SectionBackGround  row-span-2  rounded-xl  col-span-4 py-[10px] px-[15px]">
      <div className="w-full flex items-center gap-[8px]">
        <h1 className="text-[19px] text-light-60 font-medium">
          <FormattedMessage id="profile.savedProperties.title" />
        </h1>
        <FaHeart className="w-[20px] h-[20px] text-light-60" />
      </div>
    </div>
  );
};
export default SavedProperties;
