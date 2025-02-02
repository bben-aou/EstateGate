import { Skeleton } from "@/components/ui/skeleton";

export const PropertyDetailsSkeleton = () => {
  const skeletonItems = Array(6).fill(null);

  return (
    <div className="flex flex-col gap-5 border-b border-line-10 py-[1.5rem]">
      <Skeleton className="h-6 w-48" />
      <div className="grid grid-cols-3 gap-5">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="flex flex-col w-[150px] h-[100px] p-[20px] border-[1px] border-line-10 rounded-[12px] gap-2"
          >
            <Skeleton className="w-6 h-6" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsSkeleton;
