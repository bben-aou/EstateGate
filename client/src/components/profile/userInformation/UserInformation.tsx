import { User } from "@/interfaces/providers/auth.types";
import UserAvatar from "@/components/profile/userInformation/UserAvatar";
import AboutMe from "@/components/profile/userInformation/AboutMe";
import PersonnelInformation from "@/components/profile/userInformation/PersonnelInformation";
import SocialLinks from "@/components/profile/userInformation/SocialLinks";
import { UserInformationSkeleton } from "@/components/loadingUi/profile/UserInformationSkelton";

type TUserInformation = {
  user: User | null;
  isLoading?: boolean;
};

const UserInformation = ({ user, isLoading }: TUserInformation) => {
  if (isLoading) {
    return <UserInformationSkeleton />;
  }
  return (
    <div className="bg-profile-SectionBackGround col-span-2 md:rounded-xl row-span-4 py-[35px] px-[25px] flex flex-col min-h-0">
      <UserAvatar user={user} />
      <div className="flex-grow overflow-auto py-[20px] flex flex-col gap-3 w-full rounded lg hide-scrollbar">
        <AboutMe user={user} />
        <PersonnelInformation user={user} />
        <SocialLinks />
      </div>
    </div>
  );
};

export default UserInformation;
