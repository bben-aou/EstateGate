import React from "react";
// import { useParams } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";
import UserInformation from "@/components/profile/userInformation/UserInformation";
import RecentlyViewed from "@/components/profile/recentlyViewed/RecentlyViewed";
import LatestMessages from "@/components/profile/latestMessages/LatestMessages";
import SavedProperties from "@/components/profile/savedProperties/SavedProperties";

const Profile: React.FC = () => {
  // const { userId } = useParams<{ userId?: string }>();
  const { user } = useAuth();

  return (
    <div className="md:mx-[10%]  mt-[8vh] h-[92vh]  flex justify-center items-center hide-scrollbar">
      <div className="w-full h-full overflow-auto lg:grid grid-cols-6 grid-rows-4 gap-[15px] md:py-[15px] md:px-[8px] hide-scrollbar">
        <UserInformation user={user} />

        <RecentlyViewed />

        <LatestMessages />

        <SavedProperties />
      </div>
    </div>
  );
};

export default Profile;
