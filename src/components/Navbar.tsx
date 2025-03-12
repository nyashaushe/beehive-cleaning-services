
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src="/lovable-uploads/d9ad50df-06ac-4185-8011-40b40a046600.png" alt="Beehive Logo" className="h-12" />
            </Link>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold text-primary">Beehive Professional</h1>
              <p className="text-sm text-gray-600">Cleaning Services</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+234 814 078 3354</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">16 Presbyterian Avenue, Bwari-Abuja</span>
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
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/testimonials" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center gap-2 py-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+234 814 078 3354</span>
              </div>
              <div className="flex items-center gap-2 py-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">16 Presbyterian Avenue, Bwari-Abuja</span>
              </div>
              <Button className="bg-primary hover:bg-primary/90 w-full">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
