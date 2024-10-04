import badge from "@/assets/badge.svg";
import { TBadge } from "@/interfaces/components/basedOnYourLocationSection/propertyCard/types";
import { cn } from "@/lib/utils";

const Badge = (props: TBadge) => {
  const { containerClassName, labelClassName, label } = props;
  return (
    <div className={cn("relative -top-[15px]", containerClassName)}>
      <img src={badge} alt="" className="absolute left-[-8px] z-[10]" />
      <h1
        className={cn(
          "z-[20] absolute top-[6px] left-[30px] uppercase text-[12px] font-medium max-w-[80px] text-light-0 truncate",
          labelClassName
        )}
      >
        {label}
      </h1>
    </div>
  );
};
export default Badge;
