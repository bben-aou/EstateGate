import homeLocation from "@/assets/homeLocation";
import Map from "@/components/common/map/Map";
import { EMPTY_FIELD } from "@/constants/global/constants";
import { FormattedMessage } from "react-intl";
import PropertyLocationSkeleton from "@/components/loadingUi/propertyProfile/PropertyLocationSkelton";
import { TPropertyLocationProps } from "@/interfaces/responses/property";

const PropertyLocation = (props: TPropertyLocationProps) => {
  const {
    longitude = -7.6278608,
    latitude = 33.5637066,
    propertyAddress = EMPTY_FIELD,
    isLoading = false,
  } = props;
  if (isLoading) {
    return <PropertyLocationSkeleton />;
  }
  return (
    <div className="border-t border-b border-line-10 pt-[24px] pb-[50px] px-[16px]">
      <h1 className="text-[18px] text-typography-10 font-medium pb-[24px]">
        <FormattedMessage id="components.propertyProfile.propertyLocation.title" />
      </h1>
      <h1 className="text-[16px] font-light text-typography-10 pb-[24px]">
        {propertyAddress}
      </h1>
      <div className="w-full h-[480px] ">
        <Map
          markerLngLat={[longitude, latitude]}
          markerStyle={{
            icon: homeLocation,
            iconSize: 32,
          }}
          scrollZoom={false}
          showZoomControls={true}
        />
      </div>
    </div>
  );
};
export default PropertyLocation;
