
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PricingTiers = () => {
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "oneTime">("oneTime");

  const handleSubscribe = (plan: string) => {
    // Analytics tracking
    console.log(`${plan} plan subscription initiated - ${billingCycle} billing`);
    
    // In a real app, this would redirect to a checkout page or open a checkout modal
    toast({
      title: "Booking initiated",
      description: `You selected the ${plan} cleaning package with ${billingCycle === "monthly" ? "monthly" : "one-time"} service.`,
    });
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setBillingCycle("oneTime")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === "oneTime"
                ? "bg-white shadow-sm text-primary"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            One-time Cleaning
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === "monthly"
                ? "bg-white shadow-sm text-primary"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly Service
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Standard Plan */}
        <div className="flex flex-col p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">Standard</h3>
            <p className="text-gray-500 mt-1">Perfect for small homes</p>
          </div>
          
          <div className="mt-2 mb-6">
            <p className="text-3xl font-bold text-gray-900">
              ${billingCycle === "monthly" ? "120" : "150"}
              <span className="text-sm font-normal text-gray-500">
                {billingCycle === "monthly" ? "/month" : ""}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Up to 1000 sq ft</p>
          </div>
          
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">General cleaning</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Dusting all surfaces</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Vacuuming floors</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Bathroom cleaning</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Kitchen cleaning</span>
            </li>
          </ul>
          
          <Button 
            className="mt-auto w-full" 
            onClick={() => handleSubscribe("Standard")}
          >
            Book Now
          </Button>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col p-6 bg-primary text-white rounded-xl shadow-md border border-primary relative hover:shadow-lg transition-shadow">
          <div className="absolute -top-4 right-4 bg-secondary text-primary py-1 px-3 rounded-full text-sm font-medium">
            Most Popular
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold">Premium</h3>
            <p className="text-primary-foreground/80 mt-1">Ideal for medium homes</p>
          </div>
          
          <div className="mt-2 mb-6">
            <p className="text-3xl font-bold">
              ${billingCycle === "monthly" ? "180" : "220"}
              <span className="text-sm font-normal text-primary-foreground/70">
                {billingCycle === "monthly" ? "/month" : ""}
              </span>
            </p>
            <p className="text-sm text-primary-foreground/80 mt-1">1000-2000 sq ft</p>
          </div>
          
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-secondary mr-2 shrink-0" />
              <span>All Standard features</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-secondary mr-2 shrink-0" />
              <span>Deep kitchen cleaning</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-secondary mr-2 shrink-0" />
              <span>Inside fridge & oven cleaning</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-secondary mr-2 shrink-0" />
              <span>Interior window cleaning</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-secondary mr-2 shrink-0" />
              <span>Laundry (1 load)</span>
            </li>
          </ul>
          
          <Button 
            className="mt-auto w-full bg-white text-primary hover:bg-gray-100"
            onClick={() => handleSubscribe("Premium")}
          >
            Book Now
          </Button>
        </div>

        {/* Deluxe Plan */}
        <div className="flex flex-col p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">Deluxe</h3>
            <p className="text-gray-500 mt-1">For larger homes</p>
          </div>
          
          <div className="mt-2 mb-6">
            <p className="text-3xl font-bold text-gray-900">
              ${billingCycle === "monthly" ? "260" : "320"}
              <span className="text-sm font-normal text-gray-500">
                {billingCycle === "monthly" ? "/month" : ""}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">2000+ sq ft</p>
          </div>
          
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">All Premium features</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Baseboards & door frames</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Carpet stain treatment</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Furniture cleaning</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-gray-600">Cabinet organization</span>
            </li>
          </ul>
          
          <Button 
            className="mt-auto w-full" 
            onClick={() => handleSubscribe("Deluxe")}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingTiers;
