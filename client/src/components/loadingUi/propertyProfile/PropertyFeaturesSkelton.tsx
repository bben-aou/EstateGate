import { Skeleton } from "@/components/ui/skeleton";

export const PropertyFeaturesSkeleton = () => {
  const skeletonFeatures = Array(9).fill(null);
  return (
    <div className="flex flex-col gap-5 py-[1.5rem]">
      <Skeleton className="h-6 w-48" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skeletonFeatures.map((_, index) => (
          <div key={index} className="flex items-center gap-3 p-2">
            <Skeleton className="w-6 h-6" />
            <Skeleton className="h-5 w-32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeaturesSkeleton;
