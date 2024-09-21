import Header from "@components/header/Header";
import "./index.css";
import { useState } from "react";
import { IntlManager, Locale } from "@i18n/configuration/IntlManager";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Contact from "@pages/contact/Contact";
import Agents from "@pages/agents/Agents";
import NotFound from "@pages/notFound/NotFound";
import Login from "@/pages/login/sign-in/signIn";
import { HeaderProvider } from "@global/states/providers/HeaderProvider";
import { Toaster } from "@components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUp from "@/pages/login/sign-up/SignUp";
import { AuthProvider } from "@/providers/AuthProvider";
import Profile from "@/pages/profile/Profile";
import AuthGuard from "@/components/privateRoute/AuthGuard";

function App() {
  const [locale] = useState<Locale>("en");
  const queryClient = new QueryClient();

  return (
    <IntlManager locale={locale}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Toaster />
            <div className="bg-light-5 h-screen w-screen font-inter absolute">
              <HeaderProvider>
                <Header />
              </HeaderProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* Public routes */}
                <Route
                  element={
                    <AuthGuard requireAuth={false} redirectTo="/profile" />
                  }
                >
                  <Route path="/login/sign-in" element={<Login />} />
                  <Route path="/login/sign-up" element={<SignUp />} />
                </Route>

                {/* Protected routes */}
                <Route
                  element={
                    <AuthGuard requireAuth={true} redirectTo="/login/sign-in" />
                  }
                >
                  <Route path="/agents" element={<Agents />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/:userId" element={<Profile />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </IntlManager>
  );
}

export default App;
