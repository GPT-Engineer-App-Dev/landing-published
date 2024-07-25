import { Home, Building } from "lucide-react";
import Index from "./pages/Index.jsx";
import ContactUsCompanies from "./pages/ContactUsCompanies.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contact Us - Companies",
    to: "/contact-us-companies",
    icon: <Building className="h-4 w-4" />,
    page: <ContactUsCompanies />,
  },
];