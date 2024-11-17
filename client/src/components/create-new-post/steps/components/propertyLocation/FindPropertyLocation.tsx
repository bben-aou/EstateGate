import Map from "@/components/common/map/Map";
import ControlledSearchLocationInput from "@/components/create-new-post/steps/components/propertyLocation/ControlledSearchLocationInput";
import { useLocationSearch } from "@/services/locationService";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";

const FindPropertyLocation = () => {
  const [query, setQuery] = useState<string>("");
  const { data, isLoading } = useLocationSearch(query, 300);
  const [markerLngLat, setMarkerLngLat] = useState<[number, number]>([
    -7.6278608, 33.5637066,
  ]);

  const { watch } = useFormContext();
  const propertyLocation = watch("propertyLocation");

  useEffect(() => {
    if (
      propertyLocation &&
      typeof propertyLocation === "object" &&
      "lon" in propertyLocation &&
      "lat" in propertyLocation
    ) {
      setMarkerLngLat([
        parseFloat(propertyLocation.lon),
        parseFloat(propertyLocation.lat),
      ]);
    }
  }, [propertyLocation]);

  return (
    <div className="py-[40px] flex flex-col justify-center h-[75%] relative">
      <div className="absolute self-center flex justify-center top-0 w-[88%]">
        <ControlledSearchLocationInput
          options={data}
          updateQuerySearch={setQuery}
          isLoading={isLoading}
        />
      </div>
      <div className="w-[70%] h-[80%] self-center absolute bottom-0">
        <Map
          markerLngLat={markerLngLat}
          markerStyle={{
            icon: FaLocationDot,
            iconColor: "red",
            iconSize: 32,
          }}
        />
      </div>
    </div>
  );
};

export default FindPropertyLocation;
