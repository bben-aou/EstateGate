import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('@/providers/AppProviders', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="app-providers">{children}</div>,
}));

jest.mock('@/components/layout/AppLayout', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="app-layout">{children}</div>,
}));

jest.mock('@/routes/AppRoutes', () => ({
  __esModule: true,
  default: () => <div data-testid="app-routes">Mocked Routes</div>,
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app-providers')).toBeInTheDocument();
    expect(screen.getByTestId('app-layout')).toBeInTheDocument();
    expect(screen.getByTestId('app-routes')).toBeInTheDocument();
  });
});