import { IStaticItems } from "@interfaces/components/statistics/types";

const StatisticItem = (props: IStaticItems) => {
  const {
    Icon,
    className,
    valueClassName,
    dividerClassName,
    iconClassName,
    subTitle,
    title,
    value,
  } = props;
  return (
    <div
      className={`w-[243px] h-full flex items-center px-[16px] py-[24px] 0 relative ${className}`}
    >
      <div className="flex flex-col">
        <h2 className="text-[16px] text-light-40 leading-6">{title}</h2>
        <h1
          className={`text-[36px] font-extrabold text-light-60 leading-[45px] } ${valueClassName}`}
        >
          {value}
        </h1>
        <h4 className="text-[12px] leading-4">{subTitle}</h4>
      </div>
      <Icon className={`h-[32px] w-[32px] text-light-60 ${iconClassName}`} />
      <span
        className={`w-[2px] bg-[#e0e0e0] h-[75%] absolute right-0 ${dividerClassName}`}
      />
    </div>
  );
};
export default StatisticItem;
