import { FormattedMessage } from "react-intl";
import SocialMediaPlatforms from "@/components/footer/followUsOnSocialMedia/SocialMediaPlatforms";

const FollowUsOnSocialMedia = () => {
  return (
    <div className="flex-1  flex flex-col items-center">
      <h1 className="text-[20px]">
        <FormattedMessage id="footer.followUsOnSocialMedia.title" />
      </h1>
      <SocialMediaPlatforms />
    </div>
  );
};
export default FollowUsOnSocialMedia;
