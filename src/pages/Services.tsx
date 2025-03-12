
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Residential Cleaning",
    description: "Comprehensive cleaning services for homes and apartments.",
    features: ["Deep Cleaning", "Regular Maintenance", "Window Cleaning", "Carpet Cleaning"],
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for businesses and offices.",
    features: ["Office Cleaning", "Floor Maintenance", "Restroom Sanitation", "Waste Management"],
  },
  {
    title: "Specialized Services",
    description: "Custom cleaning solutions for specific needs.",
    features: ["Post-Construction", "Event Cleanup", "Move In/Out", "Sanitization"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-bg-light">
      <div className="container px-4 py-16 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center text-primary">Our Services</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6 transition-transform hover:scale-105">
              <h3 className="mb-3 text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 mr-2 bg-secondary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
