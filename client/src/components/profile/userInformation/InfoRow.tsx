import { InfoRowProps } from "@/interfaces/profile/userInformation/types";
import InfoField from "@/components/profile/userInformation/InfoField";

const InfoRow = (props: InfoRowProps) => {
  const { fields } = props;
  return (
    <div className="w-full flex lg:flex-wrap xl:flex-nowrap">
      {fields.map((field) => (
        <InfoField key={field.label} {...field} />
      ))}
    </div>
  );
};
export default InfoRow;
