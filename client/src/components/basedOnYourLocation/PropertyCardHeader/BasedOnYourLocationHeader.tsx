import React from "react";
import { FormattedMessage } from "react-intl";
import { FaMapLocationDot } from "react-icons/fa6";


const BasedOnYourLocationHeader = () => {
  return (
    <React.Fragment>
      <div className="mt-[20px] flex flex-col items-center gap-[20px] lg:mt-[80px] mb-[10px] md:mb-[16px] text-[27px] md:text-[35px] font-bold self-center tracking-[0.2px]">
        <h1>
          <FormattedMessage id="home.basedOnYourLocationSection.basedOnYourLocationHeader.title" />
        </h1>
        <FaMapLocationDot className="text-light-60"/>
      </div>
      <h4 className="self-center text-[14px] md:text-[16px] text-gray-600 font-light">
        <FormattedMessage id="home.basedOnYourLocationSection.basedOnYourLocationHeader.subTitle" />
      </h4>
    </React.Fragment>
  );
};
export default BasedOnYourLocationHeader;
