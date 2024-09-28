import '@testing-library/jest-dom';

// Mock the IntlProvider
jest.mock('react-intl', () => ({
  ...jest.requireActual('react-intl'),
  IntlProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock the useLocale hook
jest.mock('@/hooks/i18n/useLocale', () => ({
  useLocale: () => ({ locale: 'en' }),
}));


// Mock the GoogleOAuthProvider
jest.mock('@react-oauth/google', () => ({
  GoogleOAuthProvider: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('@/providers/AuthProvider', () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => children,
  useAuth: () => ({
    user: null,
    login: jest.fn(),
    logout: jest.fn(),
    // ... add other properties/methods as needed
  }),
}));