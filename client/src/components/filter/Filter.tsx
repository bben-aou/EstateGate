import { RiSearchLine } from "react-icons/ri";
import { FormProvider } from "react-hook-form";
import ComboBox from "@/components/inputs/comboBox/ComboBox";
import PropertyTypeFilter from "@/components/filter/PropertyTypeFilter";
import { getPropertyOptions } from "@/constants/options/propertyOptions";
import { IFilter } from "@/interfaces/filter/types";
import { useIntl } from "react-intl";
import clsx from "clsx";
import ControlledInput from "@components/inputs/controlledInputs/ControlledInput";
import { InputType, PriceRangeOption, PropertyTypeOption } from "@/interfaces/inputs/types";
import { LocationData } from "@/interfaces/data/location";
import useFilterForm from "@/hooks/froms/filter/useFilterForm";
import FilterInputItem from "@components/filter/FilterInputItem";
import Select from "@components/inputs/select/Select";
import { propertyTypeOptions } from "@/constants/inputs/select/propertyTypes";
import { priceRangeOptions } from "@/constants/inputs/select/priceRange";
import { cn } from "@/lib/utils";
import { useLocationSearch } from "@/services/locationService";
import { useState } from "react";

const Filter = (props: IFilter) => {
  const { containerStyle } = props;
  const intl = useIntl();

  const { handleSubmit, methods, onSubmit, control, setValue, watch, errors , onError} =
    useFilterForm();
  const [query, setQuery] = useState<string>('');
  const {data,isLoading} = useLocationSearch(query, 300);
  const propertyOptions = getPropertyOptions(intl.formatMessage);
  const defaultContainerStyle = "w-full mt-[20px]";

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={clsx(defaultContainerStyle, { containerStyle })}>
          <PropertyTypeFilter
            options={propertyOptions}
            selectedOption={watch("propertyActionType")}
            onSelectOption={(value: string) =>
              setValue("propertyActionType", value)
            }
          />

          <div className="w-full mt-[8px] text-black">
            <div className="w-full h-[85px] bg-light-0 rounded-[8px] p-[10px] flex items-center gap-[5px] px-[10px]">
              <FilterInputItem
                label={intl.formatMessage({ id : 'filter.input.location.label'})}
                errorClassName={cn({'border-error-20 bg-error-10': errors.location})}
                children={
                  <ControlledInput
                    name="location"
                    control={control}
                    component={ComboBox<LocationData>}
                    inputType={InputType.SELECT}
                    inputProps={{
                      options: data,
                      getOptionLabel: (option: LocationData) =>
                        option.display_name,
                      label: intl.formatMessage({
                        id: "Select.location.search.placeholder",
                      }),
                      searchPlaceholder: intl.formatMessage({ id :  'Select.search'}),
                      buttonClassName: cn({"text-error-20" : errors.location}),
                      onSearch : (v: string) => setQuery(v),
                      isDataLoading : isLoading
                    }
                    }
                  />
                }
              />

              <FilterInputItem
                label={intl.formatMessage({ id : 'filter.input.propertyType.label'})}
                errorClassName={cn({'border-error-20 bg-error-10': errors.propertyType})}
                children={
                  <ControlledInput
                    name="propertyType"
                    control={control}
                    component={Select<PropertyTypeOption>}
                    inputType={InputType.SELECT}
                    inputProps={{
                      options: propertyTypeOptions,
                      getLabel: (option) => option.label,
                      getValue: (option) => option.value,
                      getOptionKey: (option) => option.label,
                      label: intl.formatMessage({id : 'filter.input.propertyType.dropdown.label'}),
                      selectClassName : cn({"text-error-20" : errors.propertyType})
                    }}
                  />
                }
              />

              <FilterInputItem
                label= {intl.formatMessage({ id : 'filter.input.priceRange.label'})}
                errorClassName={cn({'border-error-20 bg-error-10': errors.priceRange})}
                children={
                  <ControlledInput
                    name="priceRange"
                    control={control}
                    component={Select<PriceRangeOption>}
                    inputType={InputType.SELECT}
                    inputProps={{
                      options: priceRangeOptions,
                      getLabel: (option) => option.label,
                      getValue: (option) => option?.value,
                      getOptionKey: (option) => option.label,
                      label: intl.formatMessage({id : 'filter.input.priceRange.dropdown.label'}),
                      selectClassName : cn({"text-error-20" : errors.priceRange})
                    }}
                  />
                }
              />
              <div className="px-[10px] h-[60%] rounded-lg bg-light-30 flex items-center justify-center">
                <RiSearchLine
                  className="cursor-pointer"
                  onClick={handleSubmit(onSubmit, onError)}
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
