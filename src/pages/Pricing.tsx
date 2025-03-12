
import { Layout } from "@/components/Layout";
import PricingTiers from "@/components/pricing/PricingTiers";
import PricingTable from "@/components/pricing/PricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";

const Pricing = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect cleaning plan for your needs. All plans include our quality guarantee and professional service.
          </p>
        </div>
        
        <PricingTiers />
        
        <div className="my-20">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">
            Compare Our Cleaning Packages
          </h2>
          <PricingTable />
        </div>
        
        <div className="my-20">
          <PricingFAQ />
        </div>
        
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-primary">Need a Custom Cleaning Solution?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us for personalized cleaning services tailored to your specific requirements.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/contact";
              // Analytics tracking
              console.log("Custom quote CTA clicked");
            }}
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
