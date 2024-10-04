import ConditionalRendering from "@/components/common/ConditionalRendering";
import { FormattedMessage } from "react-intl";

type TPropertyDescription = {
  description?: string;
};
const PropertyDescription = (props: TPropertyDescription) => {
  const { description } = props;
  return (
    <ConditionalRendering
      condition={description !== undefined}
      defaultComponent={
        <h4 className="mt[5px] mb-[10px] font-light text-gray-600">
          <FormattedMessage id="home.basedOnYourLocationSection.nearPropertyCards.propertyCardsBody.propertyDescription.NoDescriptionMessage" />
        </h4>
      }
    >
      <h1 className="font-medium text-[14px] md:text-[19px] mt-[7px] mb-[8px] md:mb-[12px] max-w-full truncate">
        {description}
      </h1>
    </ConditionalRendering>
  );
};
export default PropertyDescription;
