import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { LocationData } from "@/interfaces/data/location";
import { InputType } from "@/interfaces/inputs/types";
import React from "react";
import { useFormContext } from "react-hook-form";
import SearchLocationInput from "@/components/create-new-post/steps/components/propertyLocation/SearchLocationInput";

type TControlledSearchLocationInput = { 
    options :  LocationData[] | undefined
    updateQuerySearch : React.Dispatch<React.SetStateAction<string>>
    isLoading : boolean;
}
const ControlledSearchLocationInput = (props :  TControlledSearchLocationInput) => {
    const {options , updateQuerySearch , isLoading} = props

    const {control } = useFormContext();
  return (
    <React.Fragment>
        <ControlledInput
            name="propertyLocation"
            control={control}
            component={SearchLocationInput}
            inputType={InputType.TEXT}
            inputProps={{
                options:options,
                value: "",
                onChange : () => {},
                onBlur:  () => {},
                onSearch : (value ) => updateQuerySearch(value),
                isLoading : isLoading
            }
            }
        />

    </React.Fragment>
  );
}
export default ControlledSearchLocationInput;