import { TAdvantagesCards } from "@/interfaces/components/advantages/types";
import AdvantageCard from "@/components/advantages/AdvantageCard";

const AdvantagesCards = (props: TAdvantagesCards) => {
  const { cards } = props;
  return (
    <div className=" w-full md:h-full lg:w-[60%] flex items-center">
      <div className="grid md:grid-cols-2 md:pl-[40px] lg:pl-0 gap-[24px] lg:h-[500px] mx-[10px] md:mx-0">
        {cards.map((card, index) => (
          <AdvantageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
export default AdvantagesCards;
