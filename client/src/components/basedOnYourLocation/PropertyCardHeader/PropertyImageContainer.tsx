import { TPropertyImageContainer } from "@/interfaces/components/basedOnYourLocationSection/propertyCard/types";
import { cn } from "@/lib/utils";

const PropertyImageContainer = (props: TPropertyImageContainer) => {
  const { containerClassName, imageClassName, imageUrl } = props;
  return (
    <div className={cn("h-[200px] w-full overflow-hidden", containerClassName)}>
      <img
        src={imageUrl}
        alt="propertyImage"
        className={cn(
          "h-[12.5rem] w-full object-cover object-center rounded-t-[8px]",
          imageClassName
        )}
      />
    </div>
  );
};
export default PropertyImageContainer;
