import { InfoFieldProps } from "@/interfaces/profile/userInformation/types";

const InfoField = (props: InfoFieldProps) => {
  const { label, value } = props;
  return (
    <div className="w-full flex flex-col gap-[5px]">
      <span className="text-random-70 font-medium">{label}</span>
      <span className="text-random-70 truncate">{value}</span>
    </div>
  );
};
export default InfoField;
