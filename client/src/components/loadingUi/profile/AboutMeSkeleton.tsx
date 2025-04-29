import { Skeleton } from "@/components/ui/skeleton";

export const AboutMeSkeleton = () => (
  <div>
    <Skeleton className="h-[20px] w-[100px] mb-[10px]" />
    <div className="space-y-2 min-h-[7.5rem]">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);
