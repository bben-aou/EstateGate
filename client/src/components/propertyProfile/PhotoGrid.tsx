import { Images } from "lucide-react";
import { getGridTemplate } from "@/utils/dynamicGridTemplate";
import ShareAndSaveProperty from "@/components/propertyProfile/ShareAndSaveProperty";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import { FormattedMessage } from "react-intl";
import { TPhotosGridProps } from "@/interfaces/responses/property";
import { PhotoGridSkeleton } from "@/components/loadingUi/propertyProfile/PhotoGridSkeleton";

const PhotoGrid = (props: TPhotosGridProps) => {
  const { photos , isLoading = false } = props;

  const apiUrl = import.meta.env.VITE_API_URL;
  const sortedPhotos = [...photos]
    .sort((a, b) => (b.isMainPhoto ? 1 : -1))
    .slice(0, 5);
    if (isLoading) {
      return <PhotoGridSkeleton />;
    }
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4">
      <ShareAndSaveProperty />

      <div
        className="grid gap-2 relative"
        style={{
          gridTemplateAreas: getGridTemplate(photos.length),
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
        }}
      >
        {sortedPhotos.map((photo, index) => (
          <div
            key={photo.id}
            style={{ gridArea: `photo${index + 1}` }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src={`${apiUrl}${photo.path}`}
              alt={`propertyPic ${photo.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <ConditionalRendering condition={photos.length > 5}>
          <button className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center gap-2">
            <Images className="w-4 h-4" />
            <FormattedMessage id="components.propertyProfile.shareAndSaveProperty.showAllPictures" />
          </button>
        </ConditionalRendering>
      </div>
    </div>
  );
};

export default PhotoGrid;
