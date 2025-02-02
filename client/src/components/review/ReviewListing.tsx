import { format } from "date-fns";
import ReviewerInformationBar from "@/components/review/ReviewerInformationBar";
import StarRating from "@/components/common/Rating";
import TruncatedText from "@/components/common/text/TruncateText";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormattedMessage } from "react-intl";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TPropertyReviewsProps } from "@/interfaces/responses/property";
import { cn } from "@/lib/utils";
import { ReviewListingSkeleton } from "@/components/loadingUi/propertyProfile/ReviewListingSkeleton";

const ReviewListing = (props: Readonly<TPropertyReviewsProps>) => {
  const {
    reviews,
    containerStyle,
    reviewContainer,
    enableShowMore = true,
    truncateText = true,
    numberOfReviewsToDisplay = 4,
    isLoading = false,
  } = props;
  if (isLoading) {
    return <ReviewListingSkeleton />;
  }
  const displayedReviews = reviews.slice(0, numberOfReviewsToDisplay);
  return (
    <div
      className={cn("grid grid-cols-2 gap-[55px] mb-[25px]", containerStyle)}
    >
      {displayedReviews.map((review) => {
        const parsedDate = new Date(review.createdAt);
        const formattedDate = format(parsedDate, "MMMM yyyy");
        return (
          <div
            className={cn("max-h-[226px] w-[473px]", reviewContainer)}
            key={review.id}
          >
            <ReviewerInformationBar
              avatar={review.user.avatar}
              reviewerName={review.user.firstName + " " + review.user.lastName}
              reviewerJoiningDate={review.user.createdAt}
            />
            <div className="w-full h-[18px]  flex items-center gap-2 text-[14px] leading-[18px] font-medium mt-[12px] mb-[6px]">
              <StarRating rating={review.rating} size={10} />
              <div>{formattedDate}</div>
            </div>
            <ConditionalRendering
              condition={truncateText}
              defaultComponent={
                <h1 className="font-light text-[16px] leading-7">
                  {review.description}
                </h1>
              }
            >
              <TruncatedText
                text={review.description}
                maxLength={252}
                style="font-light text-[16px] leading-7"
              />
            </ConditionalRendering>
            <ConditionalRendering
              condition={review.description.length > 252 && enableShowMore}
            >
              <Dialog>
                <DialogTrigger className="self-start flex items-center text-[15px] font-medium mt-2 ">
                  <FormattedMessage id="common.seeMore" />
                  <MdKeyboardArrowRight className="mt-[2px]" size={17} />
                </DialogTrigger>
                <DialogContent
                  className="rounded-[12px] outline-none"
                  dialogOverlayStyle={"bg-black/30"}
                >
                  <DialogHeader>
                    <ReviewerInformationBar
                      avatar={review.user.avatar}
                      reviewerName={
                        review.user.firstName + " " + review.user.lastName
                      }
                      reviewerJoiningDate={review.updatedAt}
                    />

                    <DialogDescription className="text-start text-[16px] font-normal leading-7 text-typography-10">
                      {review.description}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </ConditionalRendering>
          </div>
        );
      })}
    </div>
  );
};
export default ReviewListing;
