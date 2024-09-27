import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/providers/AuthProvider';

const GoogleAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithGoogle } = useAuth();
    //TODO : restyle this component and make it generic for all the social media providers
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    
    if (token) {
      loginWithGoogle(token)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error('Authentication error:', error);
          navigate('/login', { state: { error: 'Authentication failed. Please try again.' } });
        });
    } else {
      const error = params.get('error');
      if (error) {
        console.error('Authentication error:', error);
        navigate('/login', { state: { error: 'Authentication failed. Please try again.' } });
      } else {
        navigate('/login');
      }
    }
  }, [location, loginWithGoogle, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Processing your login...</p>
    </div>
  );
};

export default GoogleAuthRedirect;