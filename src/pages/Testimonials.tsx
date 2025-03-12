
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Layout } from "@/components/Layout";
import { TestimonialForm } from "@/components/testimonials/TestimonialForm";
import { TestimonialList } from "@/components/testimonials/TestimonialList";
import { TestimonialContextProvider } from "@/contexts/TestimonialContext";

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 pt-28">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Customer Testimonials</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say about our cleaning services.
          </p>
        </div>
        
        <TestimonialContextProvider>
          <div className="mb-12">
            {!showForm ? (
              <div className="text-center">
                <button 
                  onClick={toggleForm} 
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Share Your Experience
                </button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Share Your Experience</h2>
                <TestimonialForm onCancel={toggleForm} onSuccess={() => {
                  toggleForm();
                  toast({
                    title: "Thank you for your feedback!",
                    description: "Your testimonial has been submitted for review.",
                  });
                }} />
              </div>
            )}
          </div>
          
          <TestimonialList />
        </TestimonialContextProvider>
      </div>
    </Layout>
  );
};

export default Testimonials;
