import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IntlProvider } from 'react-intl';
import { AuthProvider } from '@/providers/AuthProvider';  // Make sure this import is correct

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <IntlProvider locale="en" messages={{}}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };