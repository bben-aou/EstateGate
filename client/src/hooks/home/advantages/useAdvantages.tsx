import propertyImage from "@/assets/propertyInsurance.svg";
import LowestCommission from "@/assets/LowestCommission.svg";
import bestPrice from "@/assets/bestPrice.svg";
import overallControl from "@/assets/overallControl.svg";
import { useIntl } from "react-intl";
export const useAdvantages = () => {
  const intl = useIntl();

  const cardData = [
    {
      image: propertyImage,
      title: intl.formatMessage({
        id: "home.advantages.propertyInsurance.title",
      }),
      description: intl.formatMessage({
        id: "home.advantages.propertyInsurance.description",
      }),
    },
    {
      image: LowestCommission,
      title: intl.formatMessage({
        id: "home.advantages.lowestCommission.title",
      }),
      description: intl.formatMessage({
        id: "home.advantages.lowestCommission.description",
      }),
    },
    {
      image: bestPrice,
      title: intl.formatMessage({ id: "home.advantages.bestPrice.title" }),
      description: intl.formatMessage({
        id: "home.advantages.bestPrice.description",
      }),
    },
    {
      image: overallControl,
      title: intl.formatMessage({ id: "home.advantages.overAllControl.title" }),
      description: intl.formatMessage({
        id: "home.advantages.overAllControl.description",
      }),
    },
  ];
  return { cardData };
};
