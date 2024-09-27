import { User } from "@/interfaces/providers/auth.types";
import InfoRow from "@/components/profile/userInformation/InfoRow";
import { InfoRowsType } from "@/interfaces/profile/userInformation/types";
import { useIntl } from "react-intl";
import { EMPTY_FIELD } from "@/constants/global/constants";

type TUsePersonnelInformation = {
  user: User | null;
};

export const usePersonnelInformation = ({ user }: TUsePersonnelInformation) => {
  const intl = useIntl();
  if (!user) return { userInformationMapping: null };

  const { firstName, lastName, email, phoneNumber, country, city } = user;
  const infoRows: InfoRowsType = [
    [
      {
        label: intl.formatMessage({
          id: "profile.usePersonnelInformation.firstName.label",
        }),
        value: firstName ?? EMPTY_FIELD,
      },
      {
        label: intl.formatMessage({
          id: "profile.usePersonnelInformation.lastName.label",
        }),
        value: lastName ?? EMPTY_FIELD,
      },
    ],
    [
      {
        label: intl.formatMessage({
          id: "profile.usePersonnelInformation.phoneNumber.label",
        }),
        value: phoneNumber ?? EMPTY_FIELD,
      },
      { label: "Email", value: email },
    ],
    [
      {
        label: intl.formatMessage({
          id: "profile.usePersonnelInformation.country.label",
        }),
        value: country ?? EMPTY_FIELD,
      },
      {
        label: intl.formatMessage({
          id: "profile.usePersonnelInformation.city.label",
        }),
        value: city ?? EMPTY_FIELD,
      },
    ],
  ];

  const userInformationMapping = infoRows.map((fields, index) => (
    <InfoRow key={index} fields={fields} />
  ));

  return { userInformationMapping };
};
