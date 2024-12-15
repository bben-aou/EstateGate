import { TPropertyAuthorityTypes } from "@/interfaces/components/stepper/types";
import { FaRegUser } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { MdRealEstateAgent } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { EPropertyAuthority } from "@/enums/ownership";

export const usePropertyAuthorityStep = () => {
  const PropertyAuthorityTypes: TPropertyAuthorityTypes[] = [
    {
      id: 1,
      value: EPropertyAuthority.OWNER,
      title: "I am the owner",
      description:
        "You have full ownership rights to the property and are authorized to sell or rent it.",
      Icon: FaRegUser,
    },
    {
      id: 2,
      value: EPropertyAuthority.TENANT,
      title: "I am a tenant wishing to sublet",
      description:
        "You are currently renting the property and want to sublet it with the owner's permission.",
      Icon: GiHouseKeys,
    },
    {
      id: 3,
      value: EPropertyAuthority.AGENT,
      title: "I am a real estate agent",
      description:
        "You are a licensed real estate professional representing the owner or acting on their behalf.",
      Icon: MdRealEstateAgent,
    },
    {
      id: 4,
      value: EPropertyAuthority.OTHER,
      title: "Other",
      description:
        "our relationship to the property doesn't fit the categories above.",
      Icon: FaQuestion,
    },
  ];
  return { PropertyAuthorityTypes };
};
