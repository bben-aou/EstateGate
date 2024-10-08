import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { Input } from "@/components/ui/input";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { FormattedMessage } from "react-intl";

const Newsletter = () => {
  return (
    <React.Fragment>
      <h1 className="font-medium mb-[16px]">
        <FormattedMessage id="footer.logoAndNewsletterSection.newsletter.title" />
      </h1>
      <div className="flex">
        <Input
          className="w-[269px] rounded-none focus-visible:ring-0 h-10"
          placeholder="Enter your Newsletter"
        />
        <AnimatedSubscribeButton
          buttonColor="#4564d5"
          buttonTextColor="#ffffff"
          subscribeStatus={false}
          initialText={
            <span className="group inline-flex items-center text-[13px] md:text-sm">
              <FormattedMessage id="footer.logoAndNewsletterSection.newsletter.sendEmail.title" />
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              <FormattedMessage id="footer.logoAndNewsletterSection.newsletter.emailSent.title" />
            </span>
          }
        />
      </div>
    </React.Fragment>
  );
}
export default Newsletter;