import { Skeleton } from "@/components/ui/skeleton";
import { getGridTemplate } from "@/utils/dynamicGridTemplate";

export const PhotoGridSkeleton = () => {
  const skeletonPhotos = Array(5).fill(null);

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <div className="flex justify-end">
        <Skeleton className="h-10 w-32" />
      </div>

      <div
        className="grid gap-2 relative"
        style={{
          gridTemplateAreas: getGridTemplate(5),
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
        }}
      >
        {skeletonPhotos.map((_, index) => (
          <Skeleton
            key={index}
            style={{ gridArea: `photo${index + 1}` }}
            className="rounded-lg aspect-[4/3]"
          />
        ))}
      </div>
    </div>
  );
};
