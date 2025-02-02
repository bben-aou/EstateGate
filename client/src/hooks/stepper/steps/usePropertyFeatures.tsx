import { useMemo } from 'react';
import { MdOutlinePool, MdBalcony, MdOutlineLocalParking } from "react-icons/md";
import { GiGardeningShears, GiPoliceOfficerHead } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { BiSolidWasher } from "react-icons/bi";
import { LuAirVent } from "react-icons/lu";
import { PiGarageBold, PiElevatorDuotone } from "react-icons/pi";
import { FaTv, FaWifi } from "react-icons/fa";
import { IconType } from "react-icons";

type THouseFeatures = {
  value: string;
  label: string;
  Icon: IconType;
};

const usePropertyFeatures = () => {
  const HouseFeatures = useMemo<THouseFeatures[]>(() => [
    {
      value: "equipped_kitchen",
      label: "stepper.houseFeatures.equippedKitchen.label",
      Icon: FaKitchenSet,
    },
    {
      value: "elevator",
      label: "stepper.houseFeatures.elevator.label",
      Icon: PiElevatorDuotone,
    },
    {
      value: "pool",
      label: "stepper.houseFeatures.pool.label",
      Icon: MdOutlinePool,
    },
    {
      value: "balcony",
      label: "stepper.houseFeatures.balcony.label",
      Icon: MdBalcony,
    },
    {
      value: "parking",
      label: "stepper.houseFeatures.parking.label",
      Icon: MdOutlineLocalParking,
    },
    {
      value: "garage",
      label: "stepper.houseFeatures.garage.label",
      Icon: PiGarageBold,
    },
    {
      value: "garden",
      label: "stepper.houseFeatures.garden.label",
      Icon: GiGardeningShears,
    },
    {
      value: "Washer",
      label: "stepper.houseFeatures.washer.label",
      Icon: BiSolidWasher,
    },
    {
      value: "air_conditioning",
      label: "stepper.houseFeatures.airConditioning.label",
      Icon: LuAirVent,
    },
    {
      value: "TV",
      label: "stepper.houseFeatures.tv.label",
      Icon: FaTv,
    },
    {
      value: "security",
      label: "stepper.houseFeatures.security.label",
      Icon: GiPoliceOfficerHead,
    },
    {
      value: "wifi",
      label: "stepper.houseFeatures.wifi.label",
      Icon: FaWifi,
    },
  ], []);

  const normalizeFeatureValue = useMemo(() => (value: string): string => {
    return value.toLowerCase();
  }, []);

  const getFeatureConfig = useMemo(() => (backendValue: string) => {
    const normalizedValue = normalizeFeatureValue(backendValue);
    return HouseFeatures.find(
      (feature) => feature.value.toLowerCase() === normalizedValue
    );
  }, [HouseFeatures, normalizeFeatureValue]);

  return { HouseFeatures, getFeatureConfig };
};

export default usePropertyFeatures;