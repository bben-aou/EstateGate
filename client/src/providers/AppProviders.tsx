import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from '@/providers/AuthProvider';
import { IntlManager } from '@i18n/configuration/IntlManager';
import { GOOGLE_CLIENT_ID } from '../config/environment';
import { useLocale } from '@/hooks/i18n/useLocale';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
}

function AppProviders({ children }: Readonly<AppProvidersProps>) {
  const { locale } = useLocale();

  return (
    <IntlManager locale={locale}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </IntlManager>
  );
}

export default AppProviders;