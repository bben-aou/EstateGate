import { Skeleton } from "@/components/ui/skeleton";

export const UserAvatarSkeleton = () => (
  <>
    <div className="w-full flex flex-col items-center justify-center">
      <Skeleton className="w-[85px] h-[85px] rounded-full  mb-[12px]" />
      <Skeleton className="h-[16px] w-[140px] mb-2" />
      <Skeleton className="h-[14px] w-[100px]" />
    </div>
    <div className="w-full flex-shrink-0 flex items-center justify-center mt-[20px] mb-[30px] gap-3">
      <Skeleton className="w-[120px] h-[40px] rounded-lg" />
      <Skeleton className="w-[120px] h-[40px] rounded-lg" />
    </div>
  </>
);
