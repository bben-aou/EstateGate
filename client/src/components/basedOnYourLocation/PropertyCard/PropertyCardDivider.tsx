import { TPropertyCardDivider } from "@/interfaces/components/basedOnYourLocationSection/propertyCard/types";
import { cn } from "@/lib/utils";



const PropertyCardDivider = (props : TPropertyCardDivider) => {
    const { dividerClassName } = props;

  return (
    <hr className={cn("lg:mx-[24px] h-[1.5px] border-gray-400", dividerClassName)}/>
  )
};
export default PropertyCardDivider;
