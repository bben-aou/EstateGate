import React from "react";
import { FormattedMessage } from "react-intl";

const Services = () => {
  const servicesOptions = [
    "footer.servicesAndCommunity.services.aboutUs",
    "footer.servicesAndCommunity.services.careers",
    "footer.servicesAndCommunity.services.termsAndConditions",
    "footer.servicesAndCommunity.services.privacyAndPolicy",
  ];
  const ServicesMapper = servicesOptions.map((service) => (
    <h3 className="text-gray-600 cursor-not-allowed">
      <FormattedMessage id={service} />
    </h3>
  ));
  return (
    <div className="w-1/2 h-full flex flex-col items-center md:pl-[10%] lg:pl-0 gap-[20px]">
      <h1 className="text-[20px]">
        <FormattedMessage id="footer.servicesAndCommunity.services.title" />
      </h1>
      {ServicesMapper}
    </div>
  );
};
export default Services;
