
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-20 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Professional Cleaning & Maintenance Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Experience excellence in cleaning with our professional team. We deliver spotless results for homes and businesses across Abuja.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>Trusted Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="h-5 w-5 text-secondary" />
              <span>24/7 Support</span>
            </div>
          </div>
          <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
