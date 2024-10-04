import ConditionalRendering from "@/components/common/ConditionalRendering";
import { formatMoney } from "@/utils/formatMoney";
import { FormattedMessage } from "react-intl";

type TPropertyPrice = {
  amount: number;
  currencySymbol?: string;
  isRent: boolean;
};
const PropertyPrice = (props: TPropertyPrice) => {
  const { amount, currencySymbol, isRent } = props;

  return (
    <div className="flex items-center">
      <h1 className="font-bold text-[18px] md:text-[21px] text-light-60">
        {formatMoney({ amount: amount })}
      </h1>
      <div className="font-medium text-[15px] md:text-[16px] px-[7px]">
        <ConditionalRendering
          condition={currencySymbol !== undefined}
          defaultComponent={
            <h3  className="text-gray-600">
                <FormattedMessage id="home.basedOnYourLocationSection.nearPropertyCards.propertyCardsBody.propertyPrice.currency" />
            </h3>
          }
        >
          <h4 >{currencySymbol}</h4>
        </ConditionalRendering>
      </div>
      <ConditionalRendering condition={isRent}>
        <h4 className="font-light text-[15px] lg:text-[16px] text-gray-600">
          <FormattedMessage id="home.basedOnYourLocationSection.nearPropertyCards.propertyCardsBody.propertyPrice.perMonth" />
        </h4>
      </ConditionalRendering>
    </div>
  );
};
export default PropertyPrice;
