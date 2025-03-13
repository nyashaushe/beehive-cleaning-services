
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

const services = [
  {
    id: "residential",
    title: "Residential Cleaning",
    description: "Comprehensive cleaning services for homes and apartments.",
    features: ["Deep Cleaning", "Regular Maintenance", "Window Cleaning", "Carpet Cleaning"],
  },
  {
    id: "commercial",
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for businesses and offices.",
    features: ["Office Cleaning", "Floor Maintenance", "Restroom Sanitation", "Waste Management"],
  },
  {
    id: "specialized",
    title: "Specialized Services",
    description: "Custom cleaning solutions for specific needs.",
    features: ["Post-Construction", "Event Cleanup", "Move In/Out", "Sanitization"],
  },
];

const Services = () => {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-primary">Our Services</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="p-6 transition-transform hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 mr-2 bg-secondary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Link to={`/services/${service.id}`}>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
