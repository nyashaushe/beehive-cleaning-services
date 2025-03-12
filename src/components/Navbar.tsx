
import { Menu, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/d9ad50df-06ac-4185-8011-40b40a046600.png" alt="Beehive Logo" className="h-12" />
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold text-primary">Beehive Professional</h1>
              <p className="text-sm text-gray-600">Cleaning Services</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+234 814 078 3354</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">16 Presbyterian Avenue, Bwari-Abuja</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
          </div>
          
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
