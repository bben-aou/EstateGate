import { GiFarmTractor, GiGroundSprout } from "react-icons/gi";
import { BsHouse, BsBuilding, BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { LuCastle } from "react-icons/lu";
import { RiBuilding4Line } from "react-icons/ri";
import {
  MdOutlineMeetingRoom,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";
import { PiOfficeChair } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { TPropertyTypes } from "@/interfaces/components/stepper/types";
import { useFormContext } from "react-hook-form";
import { EPropertyType } from "@/enums/propertyType";


const usePropertyTypeStep = () => {
  const methods =useFormContext();
  const PropertyTypes: TPropertyTypes[]  = [
    {
      value: EPropertyType.APARTMENT,
      label: "stepper.propertyTypeStep.apartment.label",
      Icon: BsBuilding,
    },
    {
      value: EPropertyType.HOUSE,
      label: "stepper.propertyTypeStep.house.label",
      Icon: BsHouse,
    },
    {
      value: EPropertyType.VILLA,
      label: "stepper.propertyTypeStep.villa.label",
      Icon: HiOutlineBuildingLibrary,
    },
    {
      value: EPropertyType.RIAD,
      label: "stepper.propertyTypeStep.riad.label",
      Icon: LuCastle,
    },
    {
      value: EPropertyType.FARM,
      label: "stepper.propertyTypeStep.farm.label",
      Icon: GiFarmTractor,
    },
    {
      value: EPropertyType.STUDIO,
      label: "stepper.propertyTypeStep.studio.label",
      Icon: RiBuilding4Line,
    },
    {
      value: EPropertyType.DUPLEX,
      label: "stepper.propertyTypeStep.duplex.label",
      Icon: MdOutlineMeetingRoom,
    },
    {
      value: EPropertyType.TERRAIN,
      label: "stepper.propertyTypeStep.terrain.label",
      Icon: GiGroundSprout,
    },
    {
      value: EPropertyType.LOCAL_COMMERCIAL,
      label: "stepper.propertyTypeStep.commercialLocal.label",
      Icon: MdOutlineLocalGroceryStore,
    },
    {
      value: EPropertyType.BUREAU,
      label: "stepper.propertyTypeStep.office.label",
      Icon: PiOfficeChair,
    },
    {
      value: EPropertyType.BUILDING,
      label: "stepper.propertyTypeStep.building.label",
      Icon: BsBuildings,
    },
    {
      value: EPropertyType.ROOM,
      label: "stepper.propertyTypeStep.room.label",
      Icon: IoBedOutline,
    },
    {
      value: EPropertyType.HOTEL,
      label: "stepper.propertyTypeStep.hotel.label",
      Icon: LiaHotelSolid,
    },
  ];
  return { PropertyTypes, methods };
};
export default usePropertyTypeStep;
