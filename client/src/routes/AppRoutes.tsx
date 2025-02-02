import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import About from '@pages/about/About';
import Contact from '@pages/contact/Contact';
import Agents from '@pages/agents/Agents';
import NotFound from '@pages/notFound/NotFound';
import Login from '@/pages/login/sign-in/signIn';
import SignUp from '@/pages/login/sign-up/SignUp';
import Profile from '@/pages/profile/Profile';
import AuthGuard from '@/components/privateRoute/AuthGuard';
import OAuthRedirect from '@/components/login/sign-in/OAuthRedirect';
import PostProperty from '@/pages/post-property/PostProperty';
import PropertyProfile from '@/pages/propertyProfile';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Public routes */}
      <Route element={<AuthGuard requireAuth={false} redirectTo="/profile" />}>
        <Route path="/login/sign-in" element={<Login />} />
        <Route path="/login/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/auth/:provider/callback" element={<OAuthRedirect />} />
      {/* Protected routes */}
      <Route element={<AuthGuard requireAuth={true} redirectTo="/login/sign-in" />}>
        <Route path="/agents" element={<Agents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="post-property/:propertyId?" element={<PostProperty/>}/>
        <Route path="/property/:propertyType/:propertyId" element={<PropertyProfile/>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;