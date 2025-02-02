import { useMemo } from 'react';
import { TProperty, TPropertyStructure } from "@/interfaces/responses/property";
import { BsBuilding } from "react-icons/bs";
import { GiBathtub, GiHomeGarage } from "react-icons/gi";
import { IoIosExpand } from "react-icons/io";
import { IoBedOutline, IoCalendarOutline } from "react-icons/io5";
import { useIntl } from "react-intl";

const usePropertyProfile = (property?: TProperty) => {
    const intl = useIntl();

    const icons = useMemo(() => ({
        building: <BsBuilding className="w-[24px] h-[24px] text-topography-10" />,
        bed: <IoBedOutline className="w-[24px] h-[24px] text-topography-10" />,
        bath: <GiBathtub className="w-[24px] h-[24px] text-topography-10" />,
        garage: <GiHomeGarage className="w-[24px] h-[24px] text-topography-10" />,
        expand: <IoIosExpand className="w-[24px] h-[24px] text-topography-10" />,
        calendar: <IoCalendarOutline className="w-[24px] h-[24px] text-topography-10" />
    }), []);

    const propertyStructure: TPropertyStructure = useMemo(() => ({
        totalFloors: {
            value: property?.totalFloors,
            label: intl.formatMessage({ id: "common.totalFloors" }),
            Icon: icons.building,
        },
        bedrooms: {
            value: property?.bedrooms,
            label: intl.formatMessage({ id: "common.bedrooms" }),
            Icon: icons.bed,
        },
        bathrooms: {
            value: property?.bathrooms,
            label: intl.formatMessage({ id: "common.bathrooms" }),
            Icon: icons.bath,
        },
        garages: {
            value: property?.garages,
            label: intl.formatMessage({ id: "common.garages" }),
            Icon: icons.garage,
        },
        squareMeters: {
            value: property?.squareMeters,
            label: intl.formatMessage({ id: "common.squareMeters" }),
            Icon: icons.expand,
        },
        yearBuilt: {
            value: property?.yearBuilt,
            label: intl.formatMessage({ id: "common.yearBuilt" }),
            Icon: icons.calendar,
        },
    }), [property, intl, icons]);

    const propertyStructureArray = useMemo(() => 
        Object.entries(propertyStructure).map(([key, { value, label, Icon }]) => ({
            name: key,
            value,
            label,
            Icon,
        }))
    , [propertyStructure]);

    return {propertyStructureArray};
}

export default usePropertyProfile;