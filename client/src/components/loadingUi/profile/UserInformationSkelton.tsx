import { AboutMeSkeleton } from "@/components/loadingUi/profile/AboutMeSkeleton";
import { PersonnelInformationSkeleton } from "@/components/loadingUi/profile/PersonnelInformationSkeleton";
import { SocialLinksSkeleton } from "@/components/loadingUi/profile/SocialLinksSkeleton";
import { UserAvatarSkeleton } from "@/components/loadingUi/profile/UserAvatarSkeleton";

export const UserInformationSkeleton = () => {
  return (
    <div className="bg-profile-SectionBackGround col-span-2 md:rounded-xl row-span-4 py-[35px] px-[25px] flex flex-col min-h-0">
      <UserAvatarSkeleton />
      <div className="flex-grow overflow-auto py-[20px] flex flex-col gap-3 w-full rounded lg hide-scrollbar">
        <AboutMeSkeleton />
        <PersonnelInformationSkeleton />
        <SocialLinksSkeleton />
      </div>
    </div>
  );
};