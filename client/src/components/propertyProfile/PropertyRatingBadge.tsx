import LeftWreath from "@/assets/LeftWreath";
import RightWreathIcon from "@/assets/RightWreathIcon";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import { TPropertyRatingBadgeProps } from "@/interfaces/responses/property";
import { FormattedMessage } from "react-intl";
import PropertyRatingBadgeSkeleton from "@/components/loadingUi/propertyProfile/PropertyRatingBadgeSkelton";

const PropertyRatingBadge = (props: Readonly<TPropertyRatingBadgeProps>) => {
  const { averageRating = 1, numberOfReviews, isLoading = false } = props;
  if (isLoading) {
    return <PropertyRatingBadgeSkeleton />;
  }
  return (
    <div className="flex flex-col items-center pb-[1.5rem] mt-[24px]">
      <div className="flex items-center gap-2 w-full justify-center ">
        <LeftWreath className="w-[120px] h-[120px]" firstColor="#64656A" />
        <div className="text-[100px] font-medium text-light-40">
          {averageRating?.toFixed(1)}
        </div>
        <RightWreathIcon className="w-[110px] h-[110px]" firstColor="#64656A" />
      </div>
      <h1 className="text-[22px] font-medium leading-[26px] tracking-[0.01rem]">
        <FormattedMessage id="propertyReview.overAllReviewTitle" />
      </h1>
      <ConditionalRendering
        condition={!!numberOfReviews && numberOfReviews > 0}
      >
        <p className="my-[2px]">{`${"( " + numberOfReviews + " )"} review${
          numberOfReviews !== 1 ? "s" : ""
        }`}</p>
      </ConditionalRendering>
      <p className="max-w-[316px] text-center text-[18px] font-light leading-6 text-[#6a6a6a] py-[6px] tracking-[0.01rem] ">
        <FormattedMessage id="propertyRatingBadge.descriptionLabel" />
      </p>
    </div>
  );
};
export default PropertyRatingBadge;
