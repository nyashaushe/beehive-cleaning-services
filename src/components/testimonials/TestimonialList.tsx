
import { useState } from "react";
import { useTestimonials, Testimonial, TestimonialStatus } from "@/contexts/TestimonialContext";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { AdminPanel } from "@/components/testimonials/AdminPanel";
import { Button } from "@/components/ui/button";
import { FilterIcon, ArrowUpDown } from "lucide-react";

type SortOption = "date-desc" | "date-asc" | "rating-desc" | "rating-asc";

export const TestimonialList = () => {
  const { testimonials } = useTestimonials();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("date-desc");
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  // Filter testimonials
  const filteredTestimonials = testimonials.filter((testimonial) => {
    // In admin mode, show all testimonials, otherwise only show approved ones
    const statusFilter = isAdminMode ? true : testimonial.status === "approved";
    // Apply rating filter if selected
    const ratingFilter = filterRating === null || testimonial.rating === filterRating;
    
    return statusFilter && ratingFilter;
  });

  // Sort testimonials
  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    switch (sortOption) {
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "rating-desc":
        return b.rating - a.rating;
      case "rating-asc":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  // Group testimonials by status for admin mode
  const groupedTestimonials: Record<TestimonialStatus, Testimonial[]> = {
    pending: [],
    approved: [],
    rejected: []
  };

  if (isAdminMode) {
    testimonials.forEach(testimonial => {
      groupedTestimonials[testimonial.status].push(testimonial);
    });
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-semibold">
          {isAdminMode ? "Manage Testimonials" : "What Our Customers Say"}
        </h2>
        
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {!isAdminMode && (
            <>
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowSortOptions(!showSortOptions)}
                  className="flex items-center gap-1"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  Sort
                </Button>
                
                {showSortOptions && (
                  <div className="absolute right-0 mt-1 bg-white shadow-md rounded-md py-1 z-10 min-w-40">
                    <button 
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "date-desc" ? "bg-gray-100" : ""}`}
                      onClick={() => { setSortOption("date-desc"); setShowSortOptions(false); }}
                    >
                      Newest First
                    </button>
                    <button 
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "date-asc" ? "bg-gray-100" : ""}`}
                      onClick={() => { setSortOption("date-asc"); setShowSortOptions(false); }}
                    >
                      Oldest First
                    </button>
                    <button 
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "rating-desc" ? "bg-gray-100" : ""}`}
                      onClick={() => { setSortOption("rating-desc"); setShowSortOptions(false); }}
                    >
                      Highest Rating
                    </button>
                    <button 
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${sortOption === "rating-asc" ? "bg-gray-100" : ""}`}
                      onClick={() => { setSortOption("rating-asc"); setShowSortOptions(false); }}
                    >
                      Lowest Rating
                    </button>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowFilterOptions(!showFilterOptions)}
                  className="flex items-center gap-1"
                >
                  <FilterIcon className="h-4 w-4" />
                  Filter
                </Button>
                
                {showFilterOptions && (
                  <div className="absolute right-0 mt-1 bg-white shadow-md rounded-md py-1 z-10 min-w-40">
                    <button 
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${filterRating === null ? "bg-gray-100" : ""}`}
                      onClick={() => { setFilterRating(null); setShowFilterOptions(false); }}
                    >
                      All Ratings
                    </button>
                    {[5, 4, 3, 2, 1].map(rating => (
                      <button 
                        key={rating}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${filterRating === rating ? "bg-gray-100" : ""}`}
                        onClick={() => { setFilterRating(rating); setShowFilterOptions(false); }}
                      >
                        {rating} {rating === 1 ? "Star" : "Stars"}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
          
          <Button 
            variant={isAdminMode ? "default" : "outline"} 
            size="sm" 
            onClick={() => setIsAdminMode(!isAdminMode)}
          >
            {isAdminMode ? "View Customer View" : "Admin Mode"}
          </Button>
        </div>
      </div>
      
      {isAdminMode ? (
        <AdminPanel groupedTestimonials={groupedTestimonials} />
      ) : (
        <div>
          {sortedTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedTestimonials.map(testimonial => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial} 
                />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600">
                {filterRating ? 
                  `No ${filterRating}-star testimonials found.` : 
                  "No testimonials available yet. Be the first to leave a review!"}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
