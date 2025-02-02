import { Skeleton } from "@/components/ui/skeleton";

export const PropertyTitleSkeleton = () => (
  <div className="w-full h-32 py-2.5 space-y-4">
    <div className="flex items-center justify-between">
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-8 w-32" />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <Skeleton className="w-4 h-4" />
          <Skeleton className="w-24 h-4" />
        </div>
        <div className="flex items-center gap-1">
          <Skeleton className="w-4 h-4" />
          <Skeleton className="w-32 h-4" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-4 h-4" />
      </div>
    </div>
  </div>
)