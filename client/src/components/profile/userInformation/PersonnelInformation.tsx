import { User } from "@/interfaces/providers/auth.types";
import React from "react";
import { usePersonnelInformation } from "@/hooks/profile/userInformation/personnelInformation/usePersonnelInformation";
import { FormattedMessage } from "react-intl";

type TPersonnelInformation = {
  user: User | null;
};
const PersonnelInformation = (props: TPersonnelInformation) => {
  const { user } = props;
  const { userInformationMapping } = usePersonnelInformation({ user });

  if (!user || !userInformationMapping) return null;

  return (
    <React.Fragment>
      <React.Fragment>
        <h1 className="text-[20px] mb-[10px]">
          <FormattedMessage id="profile.PersonnelInformation.title" />
        </h1>
        {userInformationMapping}
      </React.Fragment>
    </React.Fragment>
  );
};
export default PersonnelInformation;
