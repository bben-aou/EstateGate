import { User } from "@/interfaces/providers/auth.types";
import { FormattedMessage, useIntl } from "react-intl";

type TAboutMe = {
  user: User | null;
};

//TODO : make sure to use a min and max number of characters for the about me section to keep the design consistent
const AboutMe = (props: TAboutMe) => {
  const { user } = props;
  const intl = useIntl();
  console.log(user);
  return (
    <div>
      <h1 className="text-[20px] mb-[10px]">
        {intl.formatMessage({ id: "profile.aboutMe.title" })}
      </h1>
      <p className="text-random-70 min-h-[7.5rem]">
        <FormattedMessage id="profile.aboutMe.paragraph" />
      </p>
    </div>
  );
};
export default AboutMe;
