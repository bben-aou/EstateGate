import { Skeleton } from "@/components/ui/skeleton";

export const SocialLinksSkeleton = () => (
  <div className="w-full flex justify-center gap-[15px] mt-[10px]">
    <Skeleton className="w-[26px] h-[26px] rounded-md" />
    <Skeleton className="w-[26px] h-[26px] rounded-md" />
    <Skeleton className="w-[26px] h-[26px] rounded-md" />
  </div>
);
