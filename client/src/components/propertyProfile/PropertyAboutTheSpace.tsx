import { MdKeyboardArrowRight } from "react-icons/md";
import ConditionalRendering from "@components/common/ConditionalRendering";
import TruncatedText from "@components/common/text/TruncateText";
import { FormattedMessage } from "react-intl";
import { TPropertyAboutTheSpaceProps } from "@/interfaces/responses/property";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import PropertyAboutTheSpaceSkeleton from "@/components/loadingUi/propertyProfile/PropertyAboutSpaceSkelton";

const PropertyAboutTheSpace = (props: TPropertyAboutTheSpaceProps) => {
  const { propertyDescription = "", isLoading = false } = props;
  if (isLoading) {
    return <PropertyAboutTheSpaceSkeleton />;
  }
  return (
    <div className="flex flex-col gap-5 border-b border-line-10 py-[1.5rem]">
      <h1 className="text-[18px] text-typography-10 font-medium">
        <FormattedMessage id="components.propertyProfile.propertyAboutTheSpace.title" />
      </h1>
      <TruncatedText
        text={propertyDescription}
        maxLength={500}
        style="font-light text-[16px] leading-7"
      />
      <ConditionalRendering condition={propertyDescription.length > 500}>
        <Dialog>
          <DialogTrigger className="self-start flex items-center text-[15px] ">
            <FormattedMessage id="common.seeMore" />
            <MdKeyboardArrowRight className="mt-[2px]" size={17} />
          </DialogTrigger>
          <DialogContent
            className="rounded-[12px] outline-none"
            dialogOverlayStyle={"bg-black/30"}
          >
            <DialogHeader>
              <DialogTitle className="self-start text-[26px] font-semibold leading-8 text-typography-10 tracking-[0.03rem] mb-[28px]">
                <FormattedMessage id="common.aboutTheSpace" />
              </DialogTitle>
              <DialogDescription className="text-start text-[16px] font-normal leading-7 text-typography-10">
                {propertyDescription}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </ConditionalRendering>
    </div>
  );
};
export default PropertyAboutTheSpace;
