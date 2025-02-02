import React from "react";
import { EMPTY_FIELD } from "@/constants/global/constants";
import { formatAmount } from "@/utils/formatAmount";
import { formatDistanceToNow } from "date-fns";
import { Clock, MapPinned, Star } from "lucide-react";
import { useIntl } from "react-intl";
import ConditionalRendering from "@/components/common/ConditionalRendering";
import { PropertyTitleSkeleton } from "@/components/loadingUi/propertyProfile/PropertyTitleSkeleton";
import { TPropertyTitleAndPriceProps } from "@/interfaces/responses/property";



const PropertyTitleAndPrice = ({
  city,
  price,
  propertyCreationDate,
  title,
  overallRating,
  isLoading,
}: TPropertyTitleAndPriceProps) => {
  const intl = useIntl();
  const parsedDate =
    propertyCreationDate && !isNaN(new Date(propertyCreationDate).getTime())
      ? new Date(propertyCreationDate)
      : null;

  if (isLoading) {
    return <PropertyTitleSkeleton />;
  }

  return (
    <div className="w-full h-32 py-2.5">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-[1.375rem] text-typography-10 tracking-[0.3px] max-w-[70%]">
          {title}
        </h1>
        <h1 className="text-[1.8125rem] font-semibold text-light-60">
          {formatAmount(price, intl.formatMessage({ id: "common.currency" }))}
        </h1>
      </div>
      <div className="w-full mt-2 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <MapPinned className="w-4 h-4 text-light-60" />
            <span className="text-sm text-light-60">{city}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-light-60" />
            <span className="text-sm text-light-60">
              {parsedDate
                ? formatDistanceToNow(new Date(parsedDate), {
                    addSuffix: true,
                  })
                : EMPTY_FIELD}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ConditionalRendering
            condition={!!overallRating}
            defaultComponent={
              <span className="text-random-70">No reviews yet</span>
            }
          >
            <span className="text-random-70">({overallRating})</span>
            <Star className="w-4 h-4 text-statistics-20" />
          </ConditionalRendering>
        </div>
      </div>
    </div>
  );
};

export default PropertyTitleAndPrice;
