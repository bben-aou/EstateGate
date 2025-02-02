import { EMPTY_FIELD } from "@/constants/global/constants";
import { useLocale } from "@/hooks/i18n/useLocale";
import { Button } from "@/components/ui/button";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import PropertyOwnerBadgeSkeleton from "@/components/loadingUi/propertyProfile/PropertyOwnerBadgeSkelton";
import { TPropertyOwnerBadgeProps } from "@/interfaces/responses/property";



const PropertyOwnerBadge = (props: TPropertyOwnerBadgeProps) => {
  const {
    avatar,
    ownerFirstName = EMPTY_FIELD,
    ownerLastName = EMPTY_FIELD,
    ownerJoiningDate,
    ownerId,
    isLoading = false,
  } = props;
  const { locale } = useLocale();

  if (isLoading) {
    return <PropertyOwnerBadgeSkeleton />;
  }
  const parsedDate =
    ownerJoiningDate && !isNaN(new Date(ownerJoiningDate).getTime())
      ? new Date(ownerJoiningDate)
      : new Date();
  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);

  return (
    <div className="w-[19.25rem] h-[270px] rounded-[0.75rem] border-[1px] border-profile-banner sticky top-10 mb-[25px] shadow-md p-[24px] flex flex-col items-center">
      <img
        src={avatar}
        alt="avatar"
        className="w-[100px] h-[100px] rounded-full"
      />
      <h1 className="mt-[10px] font-semibold text-[21px] text-typography-10 tracking-[0.01rem]">
        {ownerFirstName + " " + ownerLastName}
      </h1>
      <h2 className="font-light text-[14px]">Joined {formattedDate}</h2>
      <div className="flex gap-2 mt-[15px]">
        <Button className="bg-typography-10 text-white w-[110px] font-light">
          <FormattedMessage id="common.message" />
        </Button>
        <Link
          to={`/profile/${ownerId}`}
          className="bg-typography-10 text-white w-[110px] font-light flex items-center justify-center rounded-md text-sm "
        >
          <FormattedMessage id="common.visitProfile" />
        </Link>
      </div>
    </div>
  );
};
export default PropertyOwnerBadge;
