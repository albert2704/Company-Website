import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/WebDevelopment";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import DigitalMarketing from "./pages/DigitalMarketing";
import CyberSecurity from "./pages/CyberSecurity";
// Import policy pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

// Updated ScrollToTop component to use instant scrolling instead of smooth
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remove smooth scrolling for navigation between pages
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/business-analysis" element={<BusinessAnalysis />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />

          {/* Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
