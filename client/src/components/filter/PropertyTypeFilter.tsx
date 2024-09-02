import { IPropertyTypeFilterProps } from "@/interfaces/filter/propertyFilter/types";
import { Button } from "@components/ui/button";
import { useFormContext } from "react-hook-form";

const PropertyTypeFilter = (props: IPropertyTypeFilterProps) => {
  const { options } = props;

  const { setValue, watch } = useFormContext();
  const selectedOption = watch("propertyType");
  return (
    <div className="w-full flex gap-[5px]">
      {options.map((option, index) => (
        <Button
          key={index}
          id={option.value}
          type="button"
          className={`h-[37px] w-[90px] text-gradient-10 rounded-[8px] ${
            selectedOption === option.value
              ? "bg-button-active text-light-0"
              : "bg-light-5"
          }`}
          onClick={() => setValue("propertyType", option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
export default PropertyTypeFilter;
