import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./Backend/Login";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./Backend/Dashboard";
import { ToastContainer } from "react-toastify";
import EventDetail from './pages/EventDetail';
import ScrollToTop from './components/ScrollToTop';
import CentreForHumanness from './pages/CentreForHumanness';
import PrePrimaryChildrensHouse from './pages/PrePrimaryChildrensHouse';
import PrimarySchool from './pages/PrimarySchool';
import UpperPrimary from './pages/UpperPrimary';
import SecondarySchool from './pages/SecondarySchool';

const queryClient = new QueryClient();

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/pre-primary-childrens-house" element={<PrePrimaryChildrensHouse />} />
              <Route path="/academics/primary-school" element={<PrimarySchool />} />
              <Route path="/academics/upper-primary" element={<UpperPrimary />} />
              <Route path="/academics/secondary-school" element={<SecondarySchool />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id/:slug" element={<EventDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/centre-for-humanness" element={<CentreForHumanness />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard/*"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthProvider>
          <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
