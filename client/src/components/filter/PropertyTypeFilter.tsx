import { IPropertyTypeFilterProps } from "@/interfaces/filter/propertyFilter/types";
import { Button } from "@components/ui/button";
import { useFormContext } from "react-hook-form";

const PropertyTypeFilter = (props: IPropertyTypeFilterProps) => {
  const { options } = props;

  const { setValue, watch } = useFormContext();
  const selectedOption = watch("propertyActionType");
  return (
    <div className="w-full flex gap-[5px] justify-center md:justify-start">
      {options.map((option, index) => (
        <Button
          key={index}
          id={option.value}
          type="button"
          className={`h-[37px] w-[90px] text-gradient-10 rounded-[8px] ${
            selectedOption === option.value
              ? "bg-button-active text-light-0"
              : "bg-light-5 border-[1px] border-gray-300"
          }`}
          onClick={() => setValue("propertyActionType", option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
export default PropertyTypeFilter;
