import { Skeleton } from "@/components/ui/skeleton";

export const PropertyAddReviewSkeleton = () => {
  return (
    <div className="px-[16px] py-[24px]">
      <Skeleton className="h-6 w-48" />
      <div className="flex flex-col justify-center">
        <Skeleton className="h-5 w-96 mt-[24px]" />
        <div className="flex items-center my-[25px] gap-3">
          <Skeleton className="h-5 w-40" />
          <div className="flex gap-1">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} className="w-6 h-6" />
              ))}
          </div>
        </div>
        <Skeleton className="h-5 w-64 mb-[10px]" />
        <Skeleton className="h-[200px] w-full rounded-md" />
        <Skeleton className="h-[40px] w-[140px] mt-[15px] rounded-md" />
      </div>
    </div>
  );
};

export default PropertyAddReviewSkeleton;
