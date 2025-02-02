import Filter from "@components/filter/Filter";
import { useIntl } from "react-intl";
import Statistics from "@/components/statistics/Statistics";

const HeroSection = () => {
  const intl = useIntl();
  return (
    <div className="md:mx-[10%] mt-[8vh] h-[92vh] mb-[30px] flex flex-col justify-evenly">
      <div className=" hidden md:flex h-full md:h-[480px] lg:h-[517px] bg-gradient-to-r from-gradient-10 to-gradient-20 md:rounded-[15px] relative 2xl:pl-[47px]  flex-col lg:flex-row-reverse ">
        <div className="hidden w-[50%] lg:w-[45%] lg:flex items-end mb-[-4%] ">
          <img
            src="villa.svg"
            alt="villa"
            className="xl:relative  lg:right-0 lg:top-[6%] lg:h-full "
          />
        </div>

        <div className="h-1/2 lg:h-full w-full lg:w-[50%] flex flex-col xl:px-[45px] text-light-5 md:px-[45px] lg:px-0 md:justify-center">
          <h1 className="text-sm md:text-[20px]">
            {intl.formatMessage({ id: "home.hero.section.greeting" })}
          </h1>
          <h1 className="font-bold md:text-[40px] xl:text-[45px] text-[35px] md:my-[11px] my-[5px] xl:my-[10px] ">
            {intl.formatMessage({ id: "home.hero.section.title" })}
          </h1>
          <p className="text-sm md:text-[16px] mb-[25px]">
            {intl.formatMessage({ id: "home.hero.section.info" })}
          </p>
          <Filter containerStyle="hidden lg:flex lg:flex-col mt-[20px]" />
        </div>
        <div className="lg:hidden px-[45px] py-1/2 flex-auto ">
          <Filter containerStyle={"w-full  mt-[30px]"} />
        </div>
      </div>

      <div className="md:hidden  h-full">
        <div className="relative  h-full bg-gradient-to-r from-gradient-10 to-gradient-20">
          <img src="villa.svg" alt="villa" className="" />
          <div className="w-full h-[59%] bg-light-15 absolute bottom-0 rounded-t-[2rem]">
            <Filter containerStyle={"  mt-[30px]"} />
          </div>
        </div>
      </div>
      <Statistics />
    </div>
  );
};
export default HeroSection;
