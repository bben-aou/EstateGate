import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsFillHouseUpFill } from "react-icons/bs";
import { RiKeyFill } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";

const PropertySwitcherTabs = () => {
  return (
    <Tabs
      defaultValue="Rent"
      className="w-[377px] h-[64px]"
      onValueChange={(e) => console.log(e)}
    >
      <TabsList className="grid md:w-full grid-cols-3 h-[60px] border mx-[15px] md:mx-0">
        <TabsTrigger
          value="Rent"
          className="h-[48px] flex gap-[4px] data-[state=active]:text-light-60"
        >
          <RiKeyFill />
          <span className="text-[15px] font-medium">Rent</span>
        </TabsTrigger>
        <TabsTrigger
          value="Buy"
          className="h-[45px] flex gap-[4px] data-[state=active]:text-light-60"
        >
          <TbMoneybag />
          <span className="text-[15px] font-medium">Buy</span>
        </TabsTrigger>
        <TabsTrigger
          value="Sell"
          className="h-[45px] flex gap-[4px] data-[state=active]:text-light-60"
        >
          <BsFillHouseUpFill />
          <span className="text-[15px] font-medium">Sell</span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
export default PropertySwitcherTabs;
