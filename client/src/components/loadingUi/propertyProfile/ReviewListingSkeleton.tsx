import { SingleReviewSkeleton } from "@/components/loadingUi/propertyProfile/SingleReviewSkeleton";

export const ReviewListingSkeleton = () => {
  const skeletonReviews = Array(4).fill(null);

  return (
    <div className="grid grid-cols-2 gap-[55px] mb-[25px]">
      {skeletonReviews.map((_, index) => (
        <SingleReviewSkeleton key={index} />
      ))}
    </div>
  );
};
