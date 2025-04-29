import { Skeleton } from "@/components/ui/skeleton";

export const PersonnelInformationSkeleton = () => (
  <>
    <Skeleton className="h-[20px] w-[150px] mb-[10px]" />
    <div className="space-y-3">
      {[1, 2, 3].map((index) => (
        <div key={index} className="flex items-center gap-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      ))}
    </div>
  </>
);
