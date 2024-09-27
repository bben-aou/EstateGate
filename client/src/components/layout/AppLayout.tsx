import React from 'react';
import { HeaderProvider } from '@global/states/providers/HeaderProvider';
import Header from '@components/header/Header';
import { Toaster } from '@components/ui/toaster';

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <div className="bg-light-5 h-screen w-screen font-inter absolute">
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Toaster />
      {children}
    </div>
  );
}

export default AppLayout;