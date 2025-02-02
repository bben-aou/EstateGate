import { Skeleton } from "@/components/ui/skeleton";

export const PropertyOwnerBadgeSkeleton = () => {
  return (
    <div className="w-[19.25rem] h-[270px] rounded-[0.75rem] border-[1px] border-profile-banner sticky top-10 mb-[25px] shadow-md p-[24px] flex flex-col items-center">
      <Skeleton className="w-[100px] h-[100px] rounded-full" />
      <Skeleton className="mt-[10px] h-7 w-48" />
      <Skeleton className="mt-2 h-4 w-36" />
      <div className="flex gap-2 mt-[15px]">
        <Skeleton className="w-[110px] h-9 rounded-md" />
        <Skeleton className="w-[110px] h-9 rounded-md" />
      </div>
    </div>
  );
};

export default PropertyOwnerBadgeSkeleton;
