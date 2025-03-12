
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

export type TestimonialStatus = "pending" | "approved" | "rejected";

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  message: string;
  status: TestimonialStatus;
  date: string;
}

interface TestimonialContextType {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, "id" | "status" | "date">) => void;
  updateTestimonialStatus: (id: string, status: TestimonialStatus) => void;
  deleteTestimonial: (id: string) => void;
}

const TestimonialContext = createContext<TestimonialContextType | undefined>(undefined);

// Sample testimonials
const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    rating: 5,
    message: "Beehive Professional did an amazing job cleaning our office. Highly recommended!",
    status: "approved",
    date: "2023-11-15"
  },
  {
    id: "2",
    name: "Jane Smith",
    rating: 4,
    message: "Very thorough cleaning service. They paid attention to every detail.",
    status: "approved",
    date: "2023-12-03"
  },
  {
    id: "3",
    name: "Michael Johnson",
    rating: 5,
    message: "I've been using Beehive Professional for years, and they never disappoint. Top-notch service every time!",
    status: "approved",
    date: "2024-01-20"
  },
  {
    id: "4",
    name: "Sarah Williams",
    rating: 5,
    message: "The team was professional, punctual, and did an excellent job cleaning our home. Will definitely hire again!",
    status: "approved",
    date: "2024-02-08"
  }
];

export const TestimonialContextProvider = ({ children }: { children: ReactNode }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const savedTestimonials = localStorage.getItem("testimonials");
    return savedTestimonials ? JSON.parse(savedTestimonials) : initialTestimonials;
  });

  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const addTestimonial = (testimonialData: Omit<Testimonial, "id" | "status" | "date">) => {
    const newTestimonial: Testimonial = {
      ...testimonialData,
      id: Date.now().toString(),
      status: "pending",
      date: new Date().toISOString().split("T")[0]
    };
    
    setTestimonials([...testimonials, newTestimonial]);
  };

  const updateTestimonialStatus = (id: string, status: TestimonialStatus) => {
    setTestimonials(
      testimonials.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, status } : testimonial
      )
    );
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter((testimonial) => testimonial.id !== id));
  };

  return (
    <TestimonialContext.Provider
      value={{
        testimonials,
        addTestimonial,
        updateTestimonialStatus,
        deleteTestimonial,
      }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonials = () => {
  const context = useContext(TestimonialContext);
  if (context === undefined) {
    throw new Error("useTestimonials must be used within a TestimonialContextProvider");
  }
  return context;
};
