import { Skeleton } from "@/components/ui/skeleton";

export const SingleReviewSkeleton = () => {
  return (
    <div className="max-h-[226px] w-[473px]">
      <div className="flex items-center gap-3">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="w-full h-[18px] flex items-center gap-2 mt-[12px] mb-[6px]">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-28" />
      </div>
      <div className="space-y-2 mt-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
      </div>
      <Skeleton className="h-5 w-24 mt-2" />
    </div>
  );
};
