import React from "react";
import { useAuth } from "@/providers/AuthProvider";
import UserInformation from "@/components/profile/userInformation/UserInformation";
import RecentlyViewed from "@/components/profile/recentlyViewed/RecentlyViewed";
import LatestMessages from "@/components/profile/latestMessages/LatestMessages";
import SavedProperties from "@/components/profile/savedProperties/SavedProperties";
import { useGetUserInformation } from "@/hooks/profile/queries/useGetUserInformation";
import { useParams } from "react-router-dom";

const Profile: React.FC = () => {
  const { user, isLoading: authUserLoading } = useAuth();
  const { userId } = useParams();
  const { userInformation, isLoading } = useGetUserInformation({
    userId: userId ?? "",
  });

  const displayedUser = userId == user?.id ? user : userInformation ?? null;

  return (
    <div className="md:mx-[10%] h-[92vh] flex justify-center items-center hide-scrollbar">
      <div className="w-full h-full overflow-auto lg:grid grid-cols-6 grid-rows-4 gap-[15px] md:py-[15px] md:px-[8px] hide-scrollbar">
        <UserInformation
          user={displayedUser}
          isLoading={authUserLoading || isLoading}
        />
        <RecentlyViewed />
        <LatestMessages />
        <SavedProperties />
      </div>
    </div>
  );
};

export default Profile;
