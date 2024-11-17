import ConditionalRendering from "@/components/common/ConditionalRendering";
import Spinner from "@/components/common/Spinner";
import { Input } from "@/components/ui/input";
import { LocationData } from "@/interfaces/data/location";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

type TSearchLocationInputProps = {
  options: LocationData[] | undefined;
  value: string | LocationData;
  onChange: (value: string | LocationData) => void;
  onBlur: () => void;
  onSearch: (value: string) => void;
  isLoading: boolean;
};

const SearchLocationInput = ({
  options,
  value,
  onChange,
  onBlur,
  onSearch,
  isLoading,
}: TSearchLocationInputProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    onSearch(e.target.value);
    setShowOptions(!!e.target.value);
  };

  const handleOptionSelect = (option: LocationData) => {
    onChange(option);
    setShowOptions(false);
  };

  return (
    <React.Fragment>
      <Input
        value={typeof value === "string" ? value : value.display_name}
        onChange={handleInputChange}
        onBlur={onBlur}
        className="my-[15px] w-[80%] h-[50px] relative"
        placeholder="Search for your location"
      />

      <ConditionalRendering condition={showOptions}>
        <div className="z-[999] w-[80%] bg-light-0 shadow-lg rounded-b-lg h-[302px] overflow-auto absolute top-[70px]">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <Spinner />
            </div>
          ) : options && options.length > 0 ? (
            options
              .filter((option) =>
                option.display_name
                  .toLowerCase()
                  .includes(
                    (typeof value === "string"
                      ? value
                      : value.display_name
                    ).toLowerCase()
                  )
              )
              .map((option, index) => (
                <div
                  key={index}
                  className="w-full p-[10px] hover:bg-light-30 cursor-pointer"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.display_name}
                </div>
              ))
          ) : (
            <div className="w-full h-full flex justify-center items-center text-center text-gray-500 p-[10px]">
              <FormattedMessage id="stepper.propertyTypeStep.searchLocation.no.results" />
            </div>
          )}
        </div>
      </ConditionalRendering>
    </React.Fragment>
  );
};

export default SearchLocationInput;
