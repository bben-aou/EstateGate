import AmountInput from "@/components/inputs/amount/AmountInput";
import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { InputType } from "@/interfaces/inputs/types";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const PropertyPriceInput = () => {
  const { control, formState  } = useFormContext();

  return (
    <div className="py-[40px] h-[75%] w-full md:w-[80%] md:mx-[10%]  flex flex-col self-center  gap-[12px] overflow-y-auto px-[30px] p-[25px]">
      <ControlledInput
        name="price"
        control={control}
        rules={{ required: true }}
        component={AmountInput}
        inputType={InputType.AMOUNT}
        inputProps={{
          type: "text",
          placeholder: "Enter Your Property Price",
          className: cn(
            "w-full relative  shadow-none h-[50px] rounded-[12px] my-[10px] border-light-60 focus-visible:ring-1 focus-visible:ring-light-60",
            {
              ["border-error-20 focus-visible:ring-0 shake-horizontal"]:
                formState.errors.price,
            }
          ),
          id: "price",
        }}
      />
    </div>
  );
};
export default PropertyPriceInput;
