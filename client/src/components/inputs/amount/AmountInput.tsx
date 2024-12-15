import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { formatAmount, handleAmountChange } from "@/utils/formatAmount";

type TAmountInputProps = {
  className?: string;
  currency?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  id?: string;
  onBlur?: () => void;
};

const AmountInput = (props: TAmountInputProps) => {
  const {
    className,
    placeholder,
    currency = "DH",
    onChange,
    value,
    id,
    onBlur,
  } = props;

  return (
    <div className="relative w-full">
      <Input
        type="text"
        inputMode="decimal"
        id={id}
        className={cn(
          "pr-12",
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          className
        )}
        placeholder={placeholder}
        value={formatAmount(value)}
        onChange={(e) => handleAmountChange(e.target.value, onChange)}
        onBlur={onBlur}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
        {currency}
      </span>
    </div>
  );
};

export default AmountInput;
