

import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const { user } = useAuth();

  // If there's no userId in the URL, use the current user's data
  const profileUser = userId ? { id: userId, name: `User ${userId}` } : user;

  return (
    <div className='w-full mt-[8vh] h-[92vh] bg-light-30 flex justify-center items-center'>
      <h1>Profile</h1>
      {profileUser ? (
        <div>
          <p>User ID: {profileUser.id}</p>
          {/* Add more profile information here */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
