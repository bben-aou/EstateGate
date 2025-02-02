import { Skeleton } from "@/components/ui/skeleton";
import { ReviewListingSkeleton } from "@/components/loadingUi/propertyProfile/ReviewListingSkeleton";

export const PropertyReviewsSkeleton = () => {
  return (
    <div className="flex flex-col px-[16px] py-[24px] border-b border-line-10 pb-[30px]">
      <Skeleton className="h-6 w-48 mb-[34px]" />
      <ReviewListingSkeleton />
      <Skeleton className="h-12 w-48 rounded-md self-start" />
    </div>
  );
};

export default PropertyReviewsSkeleton;
