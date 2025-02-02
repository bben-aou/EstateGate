import { FormattedMessage } from "react-intl";
import PropertyOwnerInformationSkeleton from "@/components/loadingUi/propertyProfile/PropertyOwnerInformationSkelton";
import { TPropertyOwnerInformationProps } from "@/interfaces/responses/property";

const PropertyOwnerInformation = (props: TPropertyOwnerInformationProps) => {
  const {
    firstName,
    lastName,
    ownershipType,
    avatar,
    isLoading = false,
  } = props;
  if (isLoading) {
    return <PropertyOwnerInformationSkeleton />;
  }
  return (
    <div className="h-[5.625rem]  border-t-[1px] border-b-[1px] border-line-10 flex items-center">
      <img
        src={avatar}
        alt="avatar"
        className="w-[2.5rem] h-[2.5rem] rounded-full bg-orange-400"
      />
      <div className="flex flex-col  ml-[1rem]  ">
        <div className="font-medium text-typography-10">
          {firstName + " " + lastName}
        </div>
        <div className="tex-[0.875rem] font-normal text-random-100 leading-[1.125rem]">
          <FormattedMessage id={`common.ownership.${ownershipType}`} />
        </div>
      </div>
    </div>
  );
};
export default PropertyOwnerInformation;
