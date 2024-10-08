import { FormattedMessage } from "react-intl";

const Community = () => {
    const servicesOptions = [
    "footer.servicesAndCommunity.community.findAgents",
    "footer.servicesAndCommunity.community.lifeCycle",
    "footer.servicesAndCommunity.community.legalNotice",
  ];
  const ServicesMapper = servicesOptions.map((service) => (
    <h3 className="text-gray-600 cursor-not-allowed">
      <FormattedMessage id={service} />
    </h3>
  ));
  return (
    <div className="w-1/2 h-full flex flex-col items-center md:pr-[10%] lg:pr-0 gap-[20px]">
      <h1 className="text-[20px]">
        <FormattedMessage id="footer.servicesAndCommunity.community.title" />
      </h1>
      {ServicesMapper}
    </div>
  );
};
export default Community;
