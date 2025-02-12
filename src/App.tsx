
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetails from "./pages/ScholarshipDetails";
import SavedScholarships from "./pages/dashboard/SavedScholarships";
import Applications from "./pages/dashboard/Applications";
import Settings from "./pages/dashboard/Settings";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/admin/Dashboard";
import AddScholarship from "./pages/admin/AddScholarship";
import ManageScholarships from "./pages/admin/ManageScholarships";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/scholarships/:id" element={<ScholarshipDetails />} />
          <Route path="/dashboard/saved" element={<SavedScholarships />} />
          <Route path="/dashboard/applications" element={<Applications />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-scholarship" element={<AddScholarship />} />
          <Route path="/admin/dashboard/scholarships" element={<ManageScholarships />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
