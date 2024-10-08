import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FormattedMessage } from "react-intl";

const DescriptionSwitcherBanner = () => {
  return (
    <div className="md:mx-[10%] lg:mx-0 lg:w-[50%] mt-[50px] flex items-center px-[20px] justify-center lg:pl-[20px] z-[20] ">
      <div className="lg:w-[444px]  lg:h-[416px] ">
        <Tabs defaultValue="tenants" className="lg:w-[400px] ">
          <TabsList className="grid lg:w-full grid-cols-2 bg-banner-10 rounded-[4px] h-[64px] text-random-80 border-[1.5px] border-gray-300">
            <TabsTrigger
              value="tenants"
              className="h-[48px] border-gray-300 lg:text-[16px] font-light text-gray-600 data-[state=active]:text-[16px] data-[state=active]:lg:font-semibold data-[state=active]:font-medium data-[state=active]:tracking-[0.2px]  data-[state=active]:text-random-80"
            >
              <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forTenants.trigger" />
            </TabsTrigger>
            <TabsTrigger
              value="landlords"
              className="h-[48px]  border-gray-300 lg:text-[16px] font-light text-gray-600 data-[state=active]:text-[16px] data-[state=active]:lg:font-semibold data-[state=active]:font-medium data-[state=active]:tracking-[0.2px]  data-[state=active]:text-random-80"
            >
              <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forLandlords.trigger" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tenants" className=" lg:w-[444px] mt-[32px]">
            <h1 className="text-[32px] text-center lg:text-left lg:text-[38px]  font-bold mb-[24px]">
              <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forTenants.tabContent.title" />
            </h1>
            <p className="text-[16px] text-center lg:text-left font-light text-gray-600">
              <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forTenants.tabContent.paragraph" />
            </p>
            <button className="w-full lg:w-[150px]  h-[48px] bg-light-60 rounded-[8px] text-[16px] lg:font-semibold my-[32px] flex items-center justify-center gap-[10px] text-light-0">
              <span>
                <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forTenants.tabContent.seeMore.buttonLabel" />
              </span>
              <IoMdArrowRoundForward className="lg:w-[20px] lg:h-[20px]" />
            </button>
          </TabsContent>
          <TabsContent value="landlords" className=" lg:w-[444px] mt-[32px]">
            <h1 className="text-[32px] text-center lg:text-left lg:text-[38px] font-bold mb-[24px]">
              <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forLandlords.tabContent.title" />
            </h1>
            <p className="text-[16px] text-center lg:text-left font-light text-gray-600">
              <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forLandlords.tabContent.paragraph" />
            </p>
            <button className="w-full lg:w-[150px] h-[48px] bg-light-60 rounded-[8px] text-[16px] lg:font-semibold my-[32px] flex items-center justify-center gap-[10px] text-light-0">
              <span>
                <FormattedMessage id="home.supportDescription.DescriptionSwitcherBanner.forTenants.tabContent.seeMore.buttonLabel" />
              </span>
              <IoMdArrowRoundForward className="lg:w-[20px] h-[20px]" />
            </button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default DescriptionSwitcherBanner;
