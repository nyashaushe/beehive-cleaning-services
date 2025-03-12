
import { Testimonial } from "@/contexts/TestimonialContext";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{formatDate(testimonial.date)}</p>
          </div>
        </div>
        
        <div className="flex mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${
                star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-700 flex-grow">{testimonial.message}</p>
      </CardContent>
    </Card>
  );
};
