import BrowsePropertyCard from "@/interfaces/components/browsePropertyCard/BrowsePropertyCard";
import AdvantagesCards from "@/components/advantages/AdvantagesCards";
import { cn } from "@/lib/utils";
import { TAdvantagesSection } from "@/interfaces/components/advantages/types";
import { useAdvantages } from "@/hooks/home/advantages/useAdvantages";

const AdvantagesSection = (props: TAdvantagesSection) => {
  const { containerClassName } = props;
  const { cardData } = useAdvantages();
  return (
    <section
      className={cn(
        " md:mx-[20px] lg:mx-[10%] lg:h-[70vh] mb-[30px] flex flex-col md:flex-row ",
        containerClassName
      )}
    >
      <BrowsePropertyCard />
      <AdvantagesCards cards={cardData} />
    </section>
  );
};
export default AdvantagesSection;
