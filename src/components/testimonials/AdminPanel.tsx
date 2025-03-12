import { useState } from "react";
import { Testimonial, useTestimonials } from "@/contexts/TestimonialContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Trash2, Star } from "lucide-react";

interface AdminPanelProps {
  groupedTestimonials: Record<"pending" | "approved" | "rejected", Testimonial[]>;
}

export const AdminPanel = ({ groupedTestimonials }: AdminPanelProps) => {
  const { updateTestimonialStatus, deleteTestimonial } = useTestimonials();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("pending");

  const handleApprove = (id: string) => {
    updateTestimonialStatus(id, "approved");
    toast({
      title: "Testimonial Approved",
      description: "The testimonial has been approved and is now visible to customers."
    });
  };

  const handleReject = (id: string) => {
    updateTestimonialStatus(id, "rejected");
    toast({
      title: "Testimonial Rejected",
      description: "The testimonial has been rejected."
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this testimonial? This action cannot be undone.")) {
      deleteTestimonial(id);
      toast({
        title: "Testimonial Deleted",
        description: "The testimonial has been permanently deleted."
      });
    }
  };

  // Render testimonial items for a specific status
  const renderTestimonials = (testimonials: Testimonial[]) => {
    if (testimonials.length === 0) {
      return (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600">
            {activeTab === "pending" ? "No pending testimonials to review." : 
             activeTab === "approved" ? "No approved testimonials." : 
             "No rejected testimonials."}
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {testimonials.map(testimonial => (
          <div 
            key={testimonial.id} 
            className="border rounded-lg p-4 bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                {activeTab === "pending" && (
                  <>
                    <Button 
                      onClick={() => handleApprove(testimonial.id)} 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1 text-green-600 border-green-600 hover:bg-green-50"
                    >
                      <Check className="h-4 w-4" />
                      Approve
                    </Button>
                    <Button 
                      onClick={() => handleReject(testimonial.id)} 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1 text-red-600 border-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4" />
                      Reject
                    </Button>
                  </>
                )}
                
                {activeTab === "approved" && (
                  <Button 
                    onClick={() => updateTestimonialStatus(testimonial.id, "rejected")} 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 text-red-600 border-red-600 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                    Reject
                  </Button>
                )}
                
                {activeTab === "rejected" && (
                  <Button 
                    onClick={() => updateTestimonialStatus(testimonial.id, "approved")} 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 text-green-600 border-green-600 hover:bg-green-50"
                  >
                    <Check className="h-4 w-4" />
                    Approve
                  </Button>
                )}
                
                <Button 
                  onClick={() => handleDelete(testimonial.id)} 
                  variant="outline" 
                  size="sm" 
                  className="text-red-600 border-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex my-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <p className="text-gray-700 mt-2">{testimonial.message}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue="pending" onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="pending" className="relative">
          Pending
          {groupedTestimonials.pending.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {groupedTestimonials.pending.length}
            </span>
          )}
        </TabsTrigger>
        <TabsTrigger value="approved">Approved</TabsTrigger>
        <TabsTrigger value="rejected">Rejected</TabsTrigger>
      </TabsList>
      
      <TabsContent value="pending">
        {renderTestimonials(groupedTestimonials.pending)}
      </TabsContent>
      
      <TabsContent value="approved">
        {renderTestimonials(groupedTestimonials.approved)}
      </TabsContent>
      
      <TabsContent value="rejected">
        {renderTestimonials(groupedTestimonials.rejected)}
      </TabsContent>
    </Tabs>
  );
};
