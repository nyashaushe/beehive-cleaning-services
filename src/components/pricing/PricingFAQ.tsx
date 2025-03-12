
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "How often should I schedule a cleaning service?",
      answer: "For regular maintenance, we recommend bi-weekly or monthly cleanings. However, this depends on your household size, lifestyle, and personal preferences. Families with children or pets may benefit from more frequent cleanings."
    },
    {
      question: "What's included in the Standard cleaning package?",
      answer: "Our Standard package includes general cleaning of all rooms, dusting, vacuuming, mopping, bathroom cleaning, and kitchen surface cleaning. It's ideal for maintaining a clean home between deeper cleans."
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "No, our professional cleaners bring all necessary cleaning supplies and equipment. If you have specific products you prefer us to use due to allergies or preferences, please let us know in advance."
    },
    {
      question: "How long does a typical cleaning service take?",
      answer: "A Standard cleaning typically takes 2-3 hours, Premium 3-4 hours, and Deluxe 4-6 hours, depending on the size and condition of your home. Our team works efficiently to minimize disruption to your day."
    },
    {
      question: "Can I customize my cleaning package?",
      answer: "Absolutely! We understand that each home has unique needs. Contact us for a custom quote if you need specific services not included in our standard packages."
    },
    {
      question: "Is there a satisfaction guarantee?",
      answer: "Yes, we offer a 100% satisfaction guarantee. If you're not completely satisfied with any area we've cleaned, contact us within 24 hours and we'll return to reclean it at no additional cost."
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PricingFAQ;
