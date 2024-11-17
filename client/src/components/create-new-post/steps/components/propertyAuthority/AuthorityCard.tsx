import { Button } from "@/components/ui/button";
import { TAuthorityCard } from "@/interfaces/components/stepper/types";
import { cn } from "@/lib/utils";

const AuthorityCard = (props: TAuthorityCard) => {
  const {
    title,
    description,
    Icon,
    containerClassName,
    titleClassName,
    descriptionClassName,
    iconClassName,
    onClick,
    isSelected,
  } = props;
  return (
    <Button
      onClick={onClick}
      type="button"
      className={cn(
        " w-[630px] whitespace-normal h-[96px] rounded-[12px] border flex  items-center justify-between px-[25px] border-gray-400 hover:border-none hover:ring-banner-20 hover:ring-2 cursor-pointer",{'border-none ring-banner-20 ring-2' : isSelected},
        containerClassName
      )}
    >
      <div className="text-start">
        <h1
          className={cn(
            "text-[18px] font-medium leading-7 text-banner-20 text-start",
            titleClassName
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "text-[14px] leading-[18px] font-light mt-[4px] text-gray-600",
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
      <Icon
        className={cn("w-[36px] h-[36px] text-banner-20 ", iconClassName)}
      />
    </Button>
  );
};
export default AuthorityCard;
