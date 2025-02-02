import usePropertyFeatures from "@/hooks/stepper/steps/usePropertyFeatures";
import { TPropertyFeaturesProps } from "@/interfaces/responses/property";
import { FormattedMessage } from "react-intl";
import PropertyFeaturesSkeleton from "@/components/loadingUi/propertyProfile/PropertyFeaturesSkelton";

const PropertyFeatures = (props: TPropertyFeaturesProps) => {
  const { propertyFeatures, isLoading = false } = props;
  const { getFeatureConfig } = usePropertyFeatures();
  if (isLoading) {
    return <PropertyFeaturesSkeleton />;
  }
  return (
    <div className="flex flex-col gap-5  py-[1.5rem]">
      <h1 className="text-[18px] text-typography-10 font-medium">
        <FormattedMessage id="components.propertyProfile.propertyFeatures.title" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertyFeatures.map((feature) => {
          const featureConfig = getFeatureConfig(feature);

          if (!featureConfig) return null;

          const { Icon, label } = featureConfig;

          return (
            <div key={feature} className="flex items-center gap-3 p-2">
              <Icon className="w-6 h-6 text-typography-10" />
              <span className="text-[16px] font-light leading-5 text-typography-10 tracking-[0.04rem]">
                <FormattedMessage id={label} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyFeatures;
