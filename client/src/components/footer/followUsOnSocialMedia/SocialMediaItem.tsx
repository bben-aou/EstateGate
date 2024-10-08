import { IconType } from "react-icons";

type TSocialMediaItem = {
  Icon: IconType;
};
const SocialMediaItem = (props: TSocialMediaItem) => {
  const { Icon } = props;
  return (
    <div className="w-[40px] h-[40px] rounded-full bg-light-0 flex items-center justify-center border mt-[20px]">
      <Icon className="w-[20px] h-[20px] text-light-60" />
    </div>
  );
};
export default SocialMediaItem;
