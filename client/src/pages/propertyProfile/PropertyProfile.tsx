import PhotoGrid from "@/components/propertyProfile/PhotoGrid";
import { EMPTY_FIELD } from "@/constants/global/constants";
import { useGetProperty } from "@/hooks/property/getPropertyQuery/useGetPropertyQuery";
import { useParams } from "react-router-dom";
import PropertyTitleAndPrice from "@/components/propertyProfile/PropertyTitleAndPrice";
import PropertyOwnerInformation from "@/components/propertyProfile/PropertyOwnerInformation";
import PropertyDetails from "@/components/propertyProfile/PropertyDetails";
import usePropertyProfile from "@/hooks/property/propertyProfile/usePropertyProfile";
import PropertyAboutTheSpace from "@/components/propertyProfile/PropertyAboutTheSpace";
import PropertyFeatures from "@/components/propertyProfile/PropertyFeatures";
import PropertyLocation from "@/components/propertyProfile/PropertyLocation";
import PropertyAddReview from "@/components/propertyProfile/PropertyAddReview";
import PropertyOwnerBadge from "@/components/propertyProfile/PropertyOwnerBadge";
import PropertyFooter from "@/components/propertyProfile/PropertyFooter";
import PropertyRatingBadge from "@/components/propertyProfile/PropertyRatingBadge";
import PropertyReviews from "@/components/propertyProfile/PropertyReviews";
import ConditionalRendering from "@/components/common/ConditionalRendering";

const PropertyProfile = () => {
  const { propertyId } = useParams();
  const { property, isLoading } = useGetProperty({
    propertyId: propertyId ?? "",
  });
  console.log('🏠 ', property );
  const { propertyStructureArray } = usePropertyProfile(property);
  if(!property){
    return <>No House With this ID</>
  }
  return (
    <div className="w-full h-[92vh] overflow-auto scroll-smooth">
      <div className="w-full h-fit xl:max-w-7xl xl:mx-auto self-center lg:px-[4.375rem] pt-[1.875rem]">
        <PhotoGrid photos={property?.photos ?? []} isLoading={isLoading} />
        <div className="max-w-6xl mx-auto px-4 flex flex-row-reverse justify-between gap-4">
          <div className="hidden md:flex">
            <PropertyOwnerBadge
              avatar={property?.owner.avatar ?? ""}
              ownerFirstName={property?.owner.firstName ?? EMPTY_FIELD}
              ownerLastName={property?.owner.lastName ?? EMPTY_FIELD}
              ownerJoiningDate={property?.owner.createdAt ?? EMPTY_FIELD}
              ownerId={property?.owner.id ?? ""}
              isLoading={isLoading}
            />
          </div>
          <div className=" w-full md:w-[75%] h-fit">
            <PropertyTitleAndPrice
              title={property?.title ?? EMPTY_FIELD}
              city={property?.city ?? EMPTY_FIELD}
              price={property?.price ?? EMPTY_FIELD}
              propertyCreationDate={property?.createdAt ?? EMPTY_FIELD}
              overallRating={property?.averageRating}
              isLoading={isLoading}
            />
            <PropertyOwnerInformation
              firstName={property?.owner.firstName ?? EMPTY_FIELD}
              lastName={property?.owner.lastName ?? EMPTY_FIELD}
              ownershipType={property?.ownershipType ?? EMPTY_FIELD}
              avatar={property?.owner.avatar ?? ""}
              isLoading={isLoading}
            />
            <PropertyDetails
              propertyStructure={propertyStructureArray}
              isLoading={isLoading}
            />
            <PropertyAboutTheSpace
              propertyDescription={property?.description}
              isLoading={isLoading}
            />
            <PropertyFeatures
              propertyFeatures={property?.features || []}
              isLoading={isLoading}
            />
          </div>
        </div>
        <PropertyLocation
          longitude={property?.longitude}
          latitude={property?.latitude}
          propertyAddress={property?.address}
          isLoading={isLoading}
        />
        <div className="flex md:hidden">
          <PropertyOwnerBadge
            avatar={property?.owner.avatar ?? ""}
            ownerFirstName={property?.owner.firstName ?? EMPTY_FIELD}
            ownerLastName={property?.owner.lastName ?? EMPTY_FIELD}
            ownerJoiningDate={property?.owner.createdAt ?? EMPTY_FIELD}
            ownerId={property?.owner.id ?? ""}
            isLoading={isLoading}
          />
        </div>
        <PropertyRatingBadge
          averageRating={property?.averageRating}
          numberOfReviews={property?.reviews?.length}
          isLoading={isLoading}
        />
        <ConditionalRendering
          condition={!!property?.reviews && property?.reviews?.length > 0}
        >
          <PropertyReviews
            reviews={property?.reviews || []}
            isLoading={isLoading}
          />
        </ConditionalRendering>
        <PropertyAddReview
          propertyId={propertyId ?? ""}
          isLoading={isLoading}
        />
      </div>
      <PropertyFooter />
    </div>
  );
};
export default PropertyProfile;
