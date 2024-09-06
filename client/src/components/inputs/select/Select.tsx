import * as React from "react";
import {
  Select as SelectCn,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PriceRangeValue } from "@/interfaces/inputs/types";

interface SelectProps<T> {
  options: T[];
  getLabel: (option: T) => string;
  getValue: (option: T) => T | string | PriceRangeValue;
  getOptionKey: (option: T) => string;
  onChange?: (value: T | string | PriceRangeValue) => void;
  label?: string;
  SelectClassName?: string;
}

const Select = <T,>({ options, getLabel, getValue, getOptionKey, onChange, label, SelectClassName }: SelectProps<T>) => {
  const handleValueChange = (value: string) => {
    const selectedOption = options.find(option => getOptionKey(option) === value);
    if (selectedOption) {
      onChange?.(getValue(selectedOption));
    }
  };
  return (
    <SelectCn onValueChange={handleValueChange}>
      <SelectTrigger
        className={`w-full justify-between pl-0 border-none shadow-none hover:bg-transparent font-normal text-black truncate focus:ring-offset-0 focus:ring-0 ${SelectClassName}`}
      >
        <SelectValue placeholder={label} title={label}/>
      </SelectTrigger>
      <SelectContent className="w-[9.5vw] ml-[-10px]">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={getOptionKey(option)} value={getOptionKey(option)}>
              {getLabel(option)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </SelectCn>
  );
};

export default Select;
