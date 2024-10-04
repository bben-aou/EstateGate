import ConditionalRendering from "@/components/common/ConditionalRendering";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { useIntl } from "react-intl";

type TCardInfoItem = {
  Icon: IconType;
  value?: number;
  label: string;
  iconClassName?: string;
};
const CardInfoItem = (props: TCardInfoItem) => {
  const { Icon, value, label, iconClassName } = props;
  const intl = useIntl();
  return (
    <div className="flex items-center mx-[5px] md:mx-0 gap-[5px]">
      <Icon className={cn("text-light-60", iconClassName)} />
      <span className="text-[14px] md:text-[16px]">{value}</span>
      <ConditionalRendering
        condition={value !== undefined}
        defaultComponent={
          <span className="max-w-[25px] md:max-fit truncate text-[14px] md:text-[16px]">{label}</span>
        }
      >
        <span className="text-[14px] md:text-[16px]">
          {value && value > 1
            ? intl.formatMessage({ id: label, defaultMessage: label }).concat("s")
            : intl.formatMessage({ id: label, defaultMessage: label  })}
        </span>
      </ConditionalRendering>
    </div>
  );
};
export default CardInfoItem;
