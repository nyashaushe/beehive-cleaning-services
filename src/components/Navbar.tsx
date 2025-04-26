import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <NavLink to="/">
                <img src="/lovable-uploads/logo.png" alt="logo" className="h-12" />
              </NavLink>

            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex space-x-6">
              <NavLink to="/" className={({ isActive }) => `text-gray-700 hover:text-primary font-medium px-3 ${isActive ? "active" : ""}`}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `text-gray-700 hover:text-primary font-medium px-3 ${isActive ? "active" : ""}`}>About</NavLink>
              <NavLink to="/services" className={({ isActive }) => `text-gray-700 hover:text-primary font-medium px-3 ${isActive ? "active" : ""}`}>Services</NavLink>
              <NavLink to="/pricing" className={({ isActive }) => `text-gray-700 hover:text-primary font-medium px-3 ${isActive ? "active" : ""}`}>Pricing</NavLink>
              <NavLink to="/testimonials" className={({ isActive }) => `text-gray-700 hover:text-primary font-medium px-3 ${isActive ? "active" : ""}`}>Testimonials</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `text-gray-700 hover:text-primary font-medium px-3 ${isActive ? "active" : ""}`}>Contact</NavLink>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+234 814 078 3354</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">16 Presbyterian Avenue, Bwari-Abuja</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
          </div>
          
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => `text-gray-700 hover:text-primary font-medium py-2 ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `text-gray-700 hover:text-primary font-medium py-2 ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => `text-gray-700 hover:text-primary font-medium py-2 ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/pricing" 
                className={({ isActive }) => `text-gray-700 hover:text-primary font-medium py-2 ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink 
                to="/testimonials" 
                className={({ isActive }) => `text-gray-700 hover:text-primary font-medium py-2 ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `text-gray-700 hover:text-primary font-medium py-2 ${isActive ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <div className="flex items-center gap-2 py-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+234 814 078 3354</span>
              </div>
              <NavLink to="/contact" className="flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">16 Presbyterian Avenue, Bwari-Abuja</span>
              </NavLink>
              <Button className="bg-primary hover:bg-primary/90 w-full">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
