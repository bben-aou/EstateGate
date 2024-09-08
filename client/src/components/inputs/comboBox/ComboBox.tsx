import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIntl } from "react-intl";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";

export type ISelectProps<T> = {
  options?: T[];
  getOptionLabel: (option: T) => string;
  buttonClassName?: string;
  selectClassName?: string;
  label: string;
  searchPlaceholder?: string;
  onSelect?: (option: T | null) => void;
  onSearch?: (option: string) => void;
  isDataLoading? : boolean
} & Omit<React.ComponentProps<"button">, "onSelect">;

const ComboBox = <T,>({
  options,
  getOptionLabel,
  buttonClassName,
  selectClassName,
  label,
  searchPlaceholder,
  onSelect,
  onSearch,
  isDataLoading,
  ...rest
}: ISelectProps<T>) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<T | null>(null);
  const intl = useIntl();

  const handleSelect = (option: T | null) => {
    setSelectedOption(option);
    setOpen(false);
    onSelect?.(option);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          {...rest}
          variant="default"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between pl-0 border-none shadow-none bg-transparent hover:bg-transparent font-normal text-black truncate ${buttonClassName}`}
        >
          {selectedOption ? getOptionLabel(selectedOption) : label}
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`w-[165px] p-0 ${selectClassName}`}>
        <Command>
          <CommandInput
            placeholder={
              searchPlaceholder ??
              intl.formatMessage({
                id: "Select.search.placeholder",
              })
            }
            onChangeCapture={onSearch ? (e) => onSearch(e.currentTarget.value) : ()=>{}}
          />
          <CommandList >
            <CommandEmpty >
              <div className="w-full h-full flex items-center justify-center">
                {isDataLoading ? <LoadingSpinner /> : intl.formatMessage({ id: "Select.not.found" })}
              </div>
            </CommandEmpty>
            <CommandGroup>
              {options?.map((option) => {
                const label = getOptionLabel(option);
                return (
                  <CommandItem
                    key={label}
                    value={label}
                    onSelect={() => handleSelect(option)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedOption === option ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboBox;
