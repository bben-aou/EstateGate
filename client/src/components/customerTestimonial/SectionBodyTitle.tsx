import React from "react";
import { FormattedMessage } from "react-intl";

const SectionBodyTitle = () => {
  return (
    <div className="w-full lg:w-[40%]">
      <h1 className="text-[25px] md:text-[35px] font-bold text-center text-light-10">
        <FormattedMessage
          id="home.CustomerTestimonialSection.sectionBody.title.label"
          values={{
            span: (chunks) => (
              <span className="text-statistics-20">{chunks}</span>
            ),
          }}
        />
      </h1>
    </div>
  );
};
export default SectionBodyTitle;
