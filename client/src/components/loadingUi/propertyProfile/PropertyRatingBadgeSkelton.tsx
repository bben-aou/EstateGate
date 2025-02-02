import { Skeleton } from "@/components/ui/skeleton";

export const PropertyRatingBadgeSkeleton = () => {
  return (
    <div className="flex flex-col items-center pb-[1.5rem] mt-[24px]">
      <div className="flex items-center gap-2 w-full justify-center">
        <Skeleton className="w-[120px] h-[120px] rounded-full" />
        <Skeleton className="w-[160px] h-[120px]" />
        <Skeleton className="w-[110px] h-[110px] rounded-full" />
      </div>
      <Skeleton className="h-8 w-64 mt-4" />
      <Skeleton className="h-5 w-20 my-[2px]" />
      <Skeleton className="h-6 w-[316px] mt-2" />
    </div>
  );
};

export default PropertyRatingBadgeSkeleton;
