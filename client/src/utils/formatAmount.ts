export const formatAmount = (
  value: string | number | undefined,
  currency?: string
): string => {
  if (!value) return "";
  const cleanNum = String(value).replace(/\s/g, "");
  const [wholePart, decimalPart] = cleanNum.split(".");
  const formattedWhole = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const formattedAmount = decimalPart ? `${formattedWhole}.${decimalPart}` : formattedWhole;
  return currency ? `${formattedAmount} ${currency}` : formattedAmount;
};

export const validateAmount = (value: string): boolean => {
  return value === "" || /^\d*\.?\d{0,2}$/.test(value);
};

export const cleanAmount = (value: string): string => {
  return value.replace(/\s/g, "");
};

export const handleAmountChange = (
  value: string,
  onChange?: (value: string) => void
) => {
  const cleanValue = cleanAmount(value);
  if (validateAmount(cleanValue)) {
    onChange?.(cleanValue);
  }
};
