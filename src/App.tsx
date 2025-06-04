import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import ScrollToTop from './components/ScrollToTop';

// Lazy load all page components
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admissions'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./Backend/Login'));
const Dashboard = lazy(() => import('./Backend/Dashboard'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const CentreForHumanness = lazy(() => import('./pages/CentreForHumanness'));
const PrePrimaryChildrensHouse = lazy(() => import('./pages/PrePrimaryChildrensHouse'));
const PrimarySchool = lazy(() => import('./pages/PrimarySchool'));
const UpperPrimary = lazy(() => import('./pages/UpperPrimary'));
const SecondarySchool = lazy(() => import('./pages/SecondarySchool'));

// Define interface for PrivateRoute props
interface PrivateRouteProps {
  children: React.ReactNode;
}

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const queryClient = new QueryClient();

function PrivateRoute({ children }: PrivateRouteProps) {
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
            <Suspense fallback={<LoadingFallback />}>
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
            </Suspense>
          </AuthProvider>
          <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
