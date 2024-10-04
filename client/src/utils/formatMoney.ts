import { TFormatMoney } from "@/interfaces";


export const formatMoney = (props : TFormatMoney): string => {
    const { amount, currencySymbol = '', decimalPlaces = 2, decimalSeparator = '.', thousandsSeparator = ' ' } = props;
  const roundedAmount = amount.toFixed(decimalPlaces);
  const [integerPart, fractionalPart] = roundedAmount.split(".");

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSeparator
  );

  const formattedAmount =
    decimalPlaces > 0
      ? `${formattedIntegerPart}${decimalSeparator}${fractionalPart}`
      : formattedIntegerPart;

  return `${formattedAmount}${currencySymbol}`;
};
