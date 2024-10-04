import React from "react";
import { MdSupportAgent } from "react-icons/md";
import { FormattedMessage } from "react-intl";

const FullJourneySupport = () => {
  return (
    <div className="h-[70px] w-[90%] md:h-[80px] lg:h-[90px] md:w-[350px] bg-light-0 shadow-banner rounded-[6px] flex items-center  gap-[10px] absolute top-[32px] left-[-15px] md:left-[-50px] lg:left-[-100px] lg:top-[32px]">
      <MdSupportAgent className="w-[55px] h-[55px] text-random-80" />
      <div>
        <h1 className="text-[18px] font-medium text-random-80">
          <FormattedMessage id="home.supportDescription.fullJourneySupport.title" />
        </h1>
        <p className="font-light text-[13px] text-gray-600">
          <FormattedMessage id="home.supportDescription.fullJourneySupport.paragraph" />
        </p>
      </div>
    </div>
  );
};
export default FullJourneySupport;
