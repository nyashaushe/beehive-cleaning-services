
import { Check } from "lucide-react";

const PricingTable = () => {
  const features = [
    {
      name: "General Cleaning",
      standard: true,
      premium: true,
      deluxe: true,
    },
    {
      name: "Dusting & Vacuuming",
      standard: true,
      premium: true,
      deluxe: true,
    },
    {
      name: "Bathroom Cleaning",
      standard: true,
      premium: true,
      deluxe: true,
    },
    {
      name: "Kitchen Sink & Counters",
      standard: true,
      premium: true,
      deluxe: true,
    },
    {
      name: "Microwave Cleaning",
      standard: true,
      premium: true,
      deluxe: true,
    },
    {
      name: "Deep Kitchen Cleaning",
      standard: false,
      premium: true,
      deluxe: true,
    },
    {
      name: "Inside Fridge Cleaning",
      standard: false,
      premium: true,
      deluxe: true,
    },
    {
      name: "Inside Oven Cleaning",
      standard: false,
      premium: true,
      deluxe: true,
    },
    {
      name: "Interior Window Cleaning",
      standard: false,
      premium: true,
      deluxe: true,
    },
    {
      name: "Baseboards & Door Frames",
      standard: false,
      premium: false,
      deluxe: true,
    },
    {
      name: "Carpet Stain Treatment",
      standard: false,
      premium: false,
      deluxe: true,
    },
    {
      name: "Furniture Cleaning",
      standard: false,
      premium: false,
      deluxe: true,
    },
    {
      name: "Cabinet Organization",
      standard: false,
      premium: false,
      deluxe: true,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-4 px-6 text-left text-lg font-medium text-gray-500">Feature</th>
            <th className="py-4 px-6 text-center text-lg font-medium text-gray-900">Standard</th>
            <th className="py-4 px-6 text-center text-lg font-medium text-primary">Premium</th>
            <th className="py-4 px-6 text-center text-lg font-medium text-gray-900">Deluxe</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={index} 
              className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <td className="py-4 px-6 text-left text-gray-600">{feature.name}</td>
              <td className="py-4 px-6 text-center">
                {feature.standard ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <span className="block w-5 h-0.5 bg-gray-300 mx-auto"></span>
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.premium ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <span className="block w-5 h-0.5 bg-gray-300 mx-auto"></span>
                )}
              </td>
              <td className="py-4 px-6 text-center">
                {feature.deluxe ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <span className="block w-5 h-0.5 bg-gray-300 mx-auto"></span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
