import { MdSearch, MdCreditScore, MdLocalShipping } from "react-icons/md";

import { MdContentPasteSearch } from "react-icons/md";

export default function HowWorks() {
  const steps = [
    {
      title: "1. Browse Listings",
      desc: "Search from thousands of certified vehicles with 150-point inspection reports available instantly.",
      icon: <MdContentPasteSearch size={40} className="text-primary group-hover:text-primary-content" />
    },
    {
      title: "2. Fast Approval",
      desc: "Get pre-qualified in minutes with our transparent financing partners. No hidden fees, ever.",
      icon: <MdCreditScore size={40} className="text-primary group-hover:text-primary-content" />
    },
    {
      title: "3. Secure Delivery",
      desc: "We deliver right to your doorstep or you can pick it up at one of our local premium lounges.",
      icon: <MdLocalShipping size={40} className="text-primary group-hover:text-primary-content" />
    }
  ];

  return (
    <section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-black mb-4">Seamless Buying Experience</h2>
        <p className="text-gray-500">We've reimagined the way you buy and sell cars to make it as simple as ordering a coffee.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center space-y-6 group cursor-default">
            <div className="size-20 bg-base-200 rounded-3xl mx-auto flex items-center justify-center border border-base-300 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              {step.icon}
            </div>
            <div>
              <h4 className="text-xl font-black mb-3">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
