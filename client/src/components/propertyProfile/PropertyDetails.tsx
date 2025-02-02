import { EMPTY_FIELD } from "@/constants/global/constants";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import { FormattedMessage } from "react-intl";
import { TPropertyDetailsProps } from "@/interfaces/responses/property";
import PropertyDetailsSkeleton from "@/components/loadingUi/propertyProfile/PropertyDetailsSkelton";

const PropertyDetails = (props: TPropertyDetailsProps) => {
  const { propertyStructure, isLoading = false } = props;
  if (isLoading) {
    return <PropertyDetailsSkeleton />;
  }
  return (
    <div className="flex flex-col gap-5 border-b border-line-10 py-[1.5rem]">
      <h1 className="text-[18px] text-typography-10 font-medium">
        <FormattedMessage id="components.propertyProfile.propertyDetails.title" />
      </h1>
      <div className="grid grid-cols-3  gap-5 ">
        {propertyStructure.map((propertyDetail) => (
          <div
            key={propertyDetail.label}
            className="flex flex-col w-[150px] h-[100px] p-[20px] border-[1px] border-line-10 rounded-[12px] gap-2 text-typography-10 "
          >
            <div>{propertyDetail.Icon}</div>
            <div className="flex items-center gap-2">
              <span>{propertyDetail.label}</span>
              <span>
                {propertyDetail.value ?? EMPTY_FIELD}
                <ConditionalRendering
                  condition={propertyDetail.name === "squareMeters"}
                >
                  <span className="ml-[2px]">
                    <FormattedMessage id="stepper.propertyDetailItem.square.metre.unit" />
                  </span>
                </ConditionalRendering>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PropertyDetails;
