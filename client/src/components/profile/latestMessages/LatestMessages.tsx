import React from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FormattedMessage } from "react-intl";

const LatestMessages = () => {
  return (
    <div className="bg-profile-SectionBackGround col-span-2  rounded-xl  row-span-2 py-[10px] px-[15px]">
      <div className="w-full flex items-center gap-[8px]">
        <h1 className="text-[19px] text-light-60 font-medium">
          <FormattedMessage id="profile.latestMessages.title" />
        </h1>
        <BiSolidMessageRoundedDots className="w-[20px] h-[20px] text-light-60" />
      </div>
    </div>
  );
};
export default LatestMessages;
