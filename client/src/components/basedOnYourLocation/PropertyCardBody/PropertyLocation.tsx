import { GrMapLocation } from "react-icons/gr";

type TPropertyLocation = {
  location: string;
};
const PropertyLocation = (props: TPropertyLocation) => {
  const { location } = props;
  return (
    <div className="flex items-center gap-[7px] mt-[5px]">
      <GrMapLocation className="text-light-60"/>
      <span className="text-gray-600  text-[14px] md:text-[16px] max-w-fit truncate">{location}</span>
    </div>
  );
};
export default PropertyLocation;
