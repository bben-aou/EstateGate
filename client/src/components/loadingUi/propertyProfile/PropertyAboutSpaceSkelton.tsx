import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PropertyAboutTheSpaceSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 border-b border-line-10 py-[1.5rem]">
      <Skeleton className="h-6 w-48" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
      </div>
      <Skeleton className="h-5 w-24 self-start" />
    </div>
  );
};

export default PropertyAboutTheSpaceSkeleton;
