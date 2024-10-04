import { TAdvantageCard } from "@/interfaces/components/advantages/types";

const AdvantageCard = (props: TAdvantageCard) => {
  const { image, title, description } = props;
  return (
    <div className="lg:w-[308px] md:h-[218px]  flex gap-[10px] md:gap-0 md:flex-col ">
      <img
        src={image}
        alt="property"
        className=" w-[48px] h-[48px] md:w-[58px] md:h-[58px] mt-[20px] "
      />
      <h1 className="hidden lg:flex mt-[24px] mb-[16px] text-[24px] font-semibold tracking-[0.2px]">
        {title}
      </h1>
      <p className=" hidden lg:flex font-light text-gray-600">{description}</p>

      <div className="  lg:hidden">
        <h1 className="mt-[30px] md:mt-[20px] mb-[10px] text-[18px] font-semibold tracking-[0.2px]">
          {title}
        </h1>
        <p className="font-light text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default AdvantageCard;
