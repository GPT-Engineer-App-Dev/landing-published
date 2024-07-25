import { NavLink } from "react-router-dom";
import { Package2 } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <Package2 className="h-6 w-6" />
          <span className="font-bold">Acme Inc</span>
        </NavLink>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <NavLink to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </NavLink>
          <NavLink to="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </NavLink>
          <NavLink to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;