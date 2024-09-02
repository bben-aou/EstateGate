import { IntlShape } from "react-intl";

export const propertyOptions = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Sell", value: "sell" },
];

export const getPropertyOptions = (
  formatMessage: IntlShape["formatMessage"]
) => {
  return [
    { label: formatMessage({ id: "filter.propertyFilter.buy" }),
        value: "buy",
    },
    {
      label: formatMessage({ id: "filter.propertyFilter.rent" }),
      value: "rent",
    },
    {
      label: formatMessage({ id: "filter.propertyFilter.sell" }),
      value: "sell",
    },
  ];
};
