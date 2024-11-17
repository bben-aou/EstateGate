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


const usePropertyTypeStep = () => {
  const methods =useFormContext();
  const PropertyTypes: TPropertyTypes[]  = [
    {
      value: "apartment",
      label: "stepper.propertyTypeStep.apartment.label",
      Icon: BsBuilding,
    },
    {
      value: "house",
      label: "stepper.propertyTypeStep.house.label",
      Icon: BsHouse,
    },
    {
      value: "villa",
      label: "stepper.propertyTypeStep.villa.label",
      Icon: HiOutlineBuildingLibrary,
    },
    {
      value: "riad",
      label: "stepper.propertyTypeStep.riad.label",
      Icon: LuCastle,
    },
    {
      value: "farm",
      label: "stepper.propertyTypeStep.farm.label",
      Icon: GiFarmTractor,
    },
    {
      value: "studio",
      label: "stepper.propertyTypeStep.studio.label",
      Icon: RiBuilding4Line,
    },
    {
      value: "duplex",
      label: "stepper.propertyTypeStep.duplex.label",
      Icon: MdOutlineMeetingRoom,
    },
    {
      value: "terrain",
      label: "stepper.propertyTypeStep.terrain.label",
      Icon: GiGroundSprout,
    },
    {
      value: "localCommercial",
      label: "stepper.propertyTypeStep.commercialLocal.label",
      Icon: MdOutlineLocalGroceryStore,
    },
    {
      value: "bureau",
      label: "stepper.propertyTypeStep.office.label",
      Icon: PiOfficeChair,
    },
    {
      value: "building",
      label: "stepper.propertyTypeStep.building.label",
      Icon: BsBuildings,
    },
    {
      value: "room",
      label: "stepper.propertyTypeStep.room.label",
      Icon: IoBedOutline,
    },
    {
      value: "hotel",
      label: "stepper.propertyTypeStep.hotel.label",
      Icon: LiaHotelSolid,
    },
  ];
  return { PropertyTypes, methods };
};
export default usePropertyTypeStep;
