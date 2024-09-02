import { RiSearchLine } from "react-icons/ri";
import { FormProvider, useForm } from "react-hook-form";
import Select from "@/components/inputs/select/Select";
import { location } from "@/YummyData/locationData";
import PropertyTypeFilter from "@/components/filter/PropertyTypeFilter";
import { getPropertyOptions } from "@/constants/options/propertyOptions";
import { IFilter } from "@/interfaces/filter/types";
import { useIntl } from "react-intl";

const Filter = (props: IFilter) => {
  const { containerStyle } = props;
  const intl = useIntl();
  const methods = useForm({
    defaultValues: {
      propertyType: "buy",
      location: "",
    },
  });
  const { register, handleSubmit, watch, setValue } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const propertyOptions = getPropertyOptions(intl.formatMessage);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`w-full mt-[20px] ${containerStyle}`}>
          <PropertyTypeFilter
            options={propertyOptions}
            selectedOption={watch("propertyType")}
            onSelectOption={(value: string) => setValue("propertyType", value)}
          />

          <div className="w-full mt-[8px] text-black">
            <div className="w-full h-[85px] bg-light-0 rounded-[8px] p-[10px] flex items-center gap-[5px] px-[10px]">
              <div className="h-full w-[100px] border-[1px] border-light-30 rounded-[8px] flex-1 py-[5px] px-[10px]">
                <h1 className="text-[14px] text-light-40">Location</h1>
                <Select
                  options={location}
                  getOptionLabel={(option) => option.display_name}
                  label="Select Your Location"
                  {...register("location")}
                />
              </div>
              <div className="h-full w-[100px] border-[1px] border-light-30 rounded-[8px] flex-1 py-[5px] px-[10px]">
                <h1 className="text-[14px] text-light-40">Type</h1>
                <h1 className="tracking-wide">Villa</h1>
              </div>
              <div className="h-full w-[100px] border-[1px] border-light-30 rounded-[8px] flex-1 py-[5px] px-[10px]">
                <h1 className="text-[14px] text-light-40">Price Range</h1>
                <h1 className="tracking-wide">1200$ - 5000$</h1>
              </div>
              <div className="px-[10px] h-[60%] rounded-lg bg-light-30 flex items-center justify-center">
                <RiSearchLine
                  className="cursor-pointer"
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Filter;
