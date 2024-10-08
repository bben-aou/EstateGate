import SocialMediaItem from "@/components/footer/followUsOnSocialMedia/SocialMediaItem";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export default function SocialMediaPlatforms() {
  return (
    <div className="flex gap-[15px] ">
      <SocialMediaItem Icon={FaInstagram} />
      <SocialMediaItem Icon={FaYoutube} />
      <SocialMediaItem Icon={FaXTwitter} />
    </div>
  );
}
