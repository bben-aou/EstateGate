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
    <div className="mt-[20px] md:mt-0 w-[19.25rem] h-auto md:h-[270px] rounded-[0.75rem] border-[1px] border-profile-banner md:sticky md:top-10 mb-[25px] shadow-md p-6 flex-col items-center mx-auto">
      <div className="flex justify-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-[100px] h-[100px] rounded-full "
        />
      </div>
      <h1 className="mt-[10px] font-semibold text-[21px] text-typography-10 tracking-[0.01rem] text-center">
        {ownerFirstName + " " + ownerLastName}
      </h1>
      <h2 className="font-light text-[14px] text-center">
        Joined {formattedDate}
      </h2>
      <div className="flex flex-col md:flex-row gap-2 mt-[15px] w-full sm:w-auto">
        <Button className="bg-typography-10 text-white w-full sm:w-[110px] font-light">
          <FormattedMessage id="common.message" />
        </Button>
        <Link
          to={`/profile/${ownerId}`}
          className="bg-typography-10 text-white w-full sm:w-[110px] font-light flex items-center justify-center rounded-md text-sm h-9 px-4 py-2"
        >
          <FormattedMessage id="common.visitProfile" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyOwnerBadge;
