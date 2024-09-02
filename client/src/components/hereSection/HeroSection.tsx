import Filter from "@components/filter/Filter";
import { useIntl } from "react-intl";

const HeroSection = () => {
  const intl = useIntl();
  return (
    <div className="lg:h-[517px] bg-gradient-to-r from-gradient-10 to-gradient-20 rounded-[15px] relative lg:pl-[47px] flex flex-col lg:flex-row-reverse">
      <div className="hidden w-[50%] lg:flex items-end mb-[-4%] h">
        <img
          src="villa.svg"
          alt="villa"
          className="xl:absolute lg:right-0 lg:top-[6%] lg:h-full "
        />
      </div>

      <div className="h-1/2 lg:h-full w-full lg:w-[50%]  flex flex-col px-[45px] py-[91px] text-light-5 ">
        <h1>{intl.formatMessage({ id: "home.hero.section.greeting" })}</h1>
        <h1 className="font-bold lg:text-[45px] text-[35px] my-[5px] lg:my-[10px] ">
          {intl.formatMessage({ id: "home.hero.section.title" })}
        </h1>
        <p className="text-[14px] mb-[25px]">
          {intl.formatMessage({ id: "home.hero.section.info" })}
        </p>
        <div className="hidden lg:flex">
          <Filter />
        </div>
      </div>
      <div className="lg:hidden  px-[45px] h-1/2 flex items-center ">
        <Filter />
      </div>
    </div>
  );
};
export default HeroSection;
