import { FormattedMessage } from "react-intl";
import { TPropertyReviewsProps } from "@/interfaces/responses/property";
import ReviewListing from "@/components/review/ReviewListing";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import PropertyReviewsSkeleton from "@/components/loadingUi/propertyProfile/PropertyReviewsSkelton";

const PropertyReviews = (props: TPropertyReviewsProps) => {
  const { reviews, isLoading = false } = props;
  if (isLoading) {
    return <PropertyReviewsSkeleton />;
  }

  return (
    <div className="flex flex-col px-[16px] py-[24px] border-b border-line-10 pb-[30px]">
      <h1 className="text-[18px] text-typography-10 font-medium pb-[34px]">
        <FormattedMessage id="common.reviewTitle" />
      </h1>
      <ReviewListing reviews={reviews} isLoading={isLoading}/>
      <ConditionalRendering condition={reviews.length > 5}>
        <Dialog>
          <DialogTrigger className="self-start h-[48px] w-[192px] border-[1.5px] rounded-md text-sm font-medium  border-typography-10 ">
            <FormattedMessage
              id="propertyReviews.allReviews"
              values={{
                ratings: reviews.length,
              }}
            />
          </DialogTrigger>
          <DialogContent
            className="rounded-[12px] outline-none max-w-[590px] h-[80vh] "
            dialogOverlayStyle={"bg-black/30"}
          >
            <DialogHeader>
              <h1 className="text-start h-[52px] flex items-center text-[26px] leading-[30px] font-medium tracking-[0.02rem]">
                <FormattedMessage
                  id="common.allReviews"
                  values={{
                    reviews: reviews.length,
                  }}
                />
              </h1>
              <DialogDescription className="text-start h-[68vh] overflow-auto scroll-smooth mt-[15px] px-[10px] text-[16px] font-normal leading-7 text-typography-10">
                <ReviewListing
                  reviews={reviews}
                  containerStyle="flex flex-col gap-[30px] py-[10px]"
                  reviewContainer="w-full max-h-fit"
                  enableShowMore={false}
                  truncateText={false}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </ConditionalRendering>
    </div>
  );
};
export default PropertyReviews;
