import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from '@/providers/AppProviders';
import AppLayout from '@/components/layout/AppLayout';
import AppRoutes from '@/routes/AppRoutes';

function App() {
  return (
    <AppProviders>
      <Router>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </Router>
    </AppProviders>
  );
}

export default App;