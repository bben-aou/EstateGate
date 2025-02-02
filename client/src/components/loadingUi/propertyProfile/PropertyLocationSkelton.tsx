import { Skeleton } from "@/components/ui/skeleton";

export const PropertyLocationSkeleton = () => {
  return (
    <div className="border-t border-b border-line-10 pt-[24px] pb-[50px] px-[16px]">
      <Skeleton className="h-6 w-48 mb-[24px]" />
      <Skeleton className="h-5 w-2/3 mb-[24px]" />
      <Skeleton className="w-full h-[480px] rounded-lg" />
    </div>
  );
};

export default PropertyLocationSkeleton;
