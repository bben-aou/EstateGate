import property from "@assets/property-3d.svg";
import FullJourneySupport from "@/components/supportDescription/FullJourneySupport";
import FindBestDealBanner from "@/components/supportDescription/FindBestDealBanner";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const SupportBanner = () => {
  return (
    <div className="mx-[10%] lg:mx-0 lg:w-[50%] flex items-center justify-center">
      <div className="w-[500px] h-[400px] md:h-[550px]  rounded-[6px] border-[1px] bg-banner-10 relative">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <img
          src={property}
          alt="property-3d"
          className="w-full absolute bottom-0"
        />
        <FullJourneySupport />
        <FindBestDealBanner />
      </div>
    </div>
  );
};
export default SupportBanner;
