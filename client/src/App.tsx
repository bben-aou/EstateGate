import Header from "@components/header/Header";
import "./index.css";
import { useState } from "react";
import { IntlManager , Locale } from "@i18n/configuration/IntlManager";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "@pages/home/Home";
import About from "@pages/about/About";
import Contact from "@pages/contact/Contact";
import Agents from "@pages/agents/Agents";
import NotFound from "@pages/notFound/NotFound";
import Login from "@pages/login/Login";
import SignUp from "@pages/sign-up/SignUp";
import { HeaderProvider } from "@global/states/providers/HeaderProvider";

function App() {
  const [locale] = useState<Locale>('en');
  return (
    <IntlManager locale={locale}>
      <Router>
        <div className="bg-light-5 h-screen w-screen font-inter absolute">
          <HeaderProvider>
            <Header/>
          </HeaderProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>

    </IntlManager>
  );
}

export default App;
