import { Heart, Share2 } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { ShareModal } from "@/components/modals/Share";

const ShareAndSaveProperty = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="flex  gap-4">
        <button className="flex items-center gap-2 text-light-60">
          <ShareModal
            trigger={
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-light-60" />
                <FormattedMessage id="components.propertyProfile.shareAndSaveProperty.share" />
              </div>
            }
            url={window.location.href}
          />
        </button>
        <button className="flex items-center gap-2 text-light-60">
          <Heart className="w-5 h-5 text-light-60" />
          <FormattedMessage id="components.propertyProfile.shareAndSaveProperty.save" />
        </button>
      </div>
    </div>
  );
};
export default ShareAndSaveProperty;
