
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const servicesData = {
  "residential": {
    title: "Residential Cleaning",
    description: "Our professional residential cleaning services are designed to keep your home spotless and comfortable. We offer regular maintenance cleaning as well as deep cleaning options to meet your specific needs.",
    features: [
      "Deep Cleaning", 
      "Regular Maintenance", 
      "Window Cleaning", 
      "Carpet Cleaning",
      "Upholstery Cleaning",
      "Sanitization Services"
    ],
  },
  "commercial": {
    title: "Commercial Cleaning",
    description: "We provide comprehensive commercial cleaning solutions for businesses of all sizes. Our professional team ensures your office or retail space maintains a clean and professional appearance.",
    features: [
      "Office Cleaning", 
      "Floor Maintenance", 
      "Restroom Sanitation", 
      "Waste Management",
      "Window and Glass Cleaning",
      "Carpet and Upholstery Care"
    ],
  },
  "specialized": {
    title: "Specialized Services",
    description: "Our specialized cleaning services address specific cleaning challenges or situations that require expert attention and specialized equipment or techniques.",
    features: [
      "Post-Construction", 
      "Event Cleanup", 
      "Move In/Out", 
      "Sanitization",
      "Disaster Recovery",
      "Specialized Floor Treatments"
    ],
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    if (serviceId && serviceId in servicesData) {
      setService(servicesData[serviceId as keyof typeof servicesData]);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center">Service not found</h1>
          <div className="flex justify-center mt-8">
            <Link to="/services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-4">{service.title}</h1>
          <p className="text-gray-600 mb-8">{service.description}</p>
          
          <h2 className="text-xl font-semibold mb-4">Services Included:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="w-2 h-2 mr-2 bg-secondary rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="flex justify-between mt-6">
            <Link to="/services">
              <Button variant="outline">Back to Services</Button>
            </Link>
            <Link to="/contact">
              <Button>Request a Quote</Button>
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
