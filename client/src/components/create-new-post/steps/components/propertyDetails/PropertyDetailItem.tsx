import React from "react";
import ControlButtonCounter from "@/components/create-new-post/steps/components/common/ControlButtonCounter";
import { FieldValues } from "react-hook-form";
import ControlledInput from "@/components/inputs/controlledInputs/ControlledInput";
import { InputType } from "@/interfaces/inputs/types";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import { FormattedMessage } from "react-intl";
import { IPropertyDetailItem } from "@/interfaces/components/stepper/types";

const PropertyDetailItem = <T extends FieldValues>(
  props: Readonly<IPropertyDetailItem<T>>
) => {
  const { control, name, label, unitLabel, maxValue } = props;

  return (
    <React.Fragment>
      <div className="flex justify-between items-center h-[60px] my-[10px]">
        {label}
        <div className="flex items-center ">
          <ControlledInput
            name={name}
            control={control}
            component={ControlButtonCounter}
            inputType={InputType.CUSTOM}
            inputProps={{
              counterInitialValue: 1, //TODO : use the current value to keep the data while clicking previous
              onClick: () => {},
              maxValue: maxValue,
            }}
          />
          <ConditionalRendering condition={unitLabel !== undefined}>
            <FormattedMessage id={unitLabel} />
          </ConditionalRendering>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};
export default PropertyDetailItem;
