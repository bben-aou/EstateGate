import { Button } from "@/components/ui/button";
import { TPropertyCard } from "@/interfaces/components/stepper/types";
import { cn } from "@/lib/utils";
import { FormattedMessage } from "react-intl";

const PropertyCard = (props: TPropertyCard) => {
  const {
    Icon,
    label,
    onClick,
    isSelected = false,
    isWithinMultiSelect = false,
  } = props;

  return (
    <Button
      onClick={onClick}
      className={cn(
        "w-[202px] h-[99px] flex flex-col items-start border border-gray-400 hover:border-none hover:ring-banner-20 hover:ring-2 rounded-[8px] p-[17px] cursor-pointer",
        {
          "ring-banner-20 ring-2 border-none":
            isSelected || isWithinMultiSelect,
        }
      )}
    >
      <Icon
        className={cn("w-[30px] h-[30px] mb-[6px] text-banner-30", {
          "text-banner-20": isSelected || isWithinMultiSelect,
        })}
      />
      <h1
        className={cn("text-[16px] font-medium leading-5 text-banner-30", {
          "text-banner-20": isSelected || isWithinMultiSelect,
        })}
      >
        <FormattedMessage id={label} />
      </h1>
    </Button>
  );
};
export default PropertyCard;
