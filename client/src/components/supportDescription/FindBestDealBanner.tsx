import { BsFillHouseHeartFill } from "react-icons/bs";
import { FormattedMessage } from "react-intl";

const FindBestDealBanner = () => {
  return (
    <div className="h-[70px] w-[80%] lg:h-[90px] lg:w-[350px] bg-light-0 shadow-banner rounded-[6px] flex flex-col justify-center gap-[10px]  absolute left-[10%] lg:right-[75px] bottom-[-25px] lg:bottom-[-45px]">
      <div className=" w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full border-[1px] bg-random-80  top-[-20px] lg:top-[-30px] absolute right-[10px] flex items-center justify-center">
        <BsFillHouseHeartFill className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] text-light-0" />
      </div>
      <div className="pl-[32px]">
        <h1 className="text-[18px] font-medium text-random-80">
          <FormattedMessage id="home.supportDescription.findTheBestDeal.title" />
        </h1>
        <p className="font-light text-[13px] text-gray-600">
          <FormattedMessage id="home.supportDescription.findTheBestDeal.paragraph" />
        </p>
      </div>
    </div>
  );
};
export default FindBestDealBanner;
