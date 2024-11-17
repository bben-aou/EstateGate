import { useCounter } from "@/hooks/stepper/common/useControlButtonCounter";
import { TControlButtonCounter } from "@/interfaces/components/stepper/types";
import { cn } from "@/lib/utils";
import { HiPlusSm, HiMinus } from "react-icons/hi";

const ControlButtonCounter = (props: TControlButtonCounter) => {
  const { counterInitialValue, onClick, maxValue } = props;

  const handleChange = (newValue: number) => {
    onClick(newValue);
  };

  const { count, increment, decrement } = useCounter({
    initialValue: counterInitialValue,
    min: 1,
    onChange: handleChange,
    max: maxValue,
  });

  return (
    <div className="w-[107px] h-[32px] flex items-center">
      <button
        type="button"
        className={cn(
          "w-[32px] h-[32px] rounded-full border text-gray-400 border-gray-400 hover:text-black hover:border-black text-[18px] flex items-center justify-center cursor-pointer"
        )}
        onClick={decrement}
      >
        <HiMinus className="hover:text-black" />
      </button>
      <h1 className="w-[30px] flex items-center justify-center ">{count}</h1>
      <button
        type="button"
        disabled={count == maxValue}
        className={cn(
          "w-[32px] h-[32px] rounded-full text-gray-400 border border-gray-400  text-[18px] flex items-center justify-center cursor-pointer",
          { "cursor-not-allowed ": count == maxValue },
          { "hover:text-black hover:border-black": count !== maxValue }
        )}
        onClick={increment}
      >
        <HiPlusSm />
      </button>
    </div>
  );
};

export default ControlButtonCounter;
