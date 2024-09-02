export const PROPERTY_OPTIONS = [
    { label: "Buy", value: "buy" },
    { label: "Rent", value: "rent" },
    { label: "Sell", value: "sell" },
  ];

export type TOptions = {
    label: string;
    value: string;
  };

export type IPropertyTypeFilterProps = {
    options: TOptions[];
    selectedOption: string;
    onSelectOption: (value: string) => void;
  };