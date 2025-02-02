import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PropertyOwnerInformationSkeleton = () => {
  return (
    <div className="h-[5.625rem] border-t-[1px] border-b-[1px] border-line-10 flex items-center">
      <Skeleton className="w-[2.5rem] h-[2.5rem] rounded-full" />
      <div className="flex flex-col ml-[1rem] gap-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
};

export default PropertyOwnerInformationSkeleton;
