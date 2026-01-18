import { MdArrowForward, MdTimer, MdSell, MdPayments } from "react-icons/md";

export default function BestThisMonth() {
  return (
    <section>
      <h2 className="text-3xl font-black mb-8">Best Deals This Month</h2>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-r from-primary to-blue-400 rounded-3xl p-1 shadow-2xl shadow-primary/10">
          <div className="bg-base-200 rounded-[calc(1.5rem-4px)] p-8 flex flex-col md:flex-row gap-8 h-full">
            <div className="md:w-1/2 rounded-2xl overflow-hidden">
               <img 
                 alt="Featured" 
                 className="w-full h-full object-cover" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBknYyOAinIfUH72IFDg8HIlU8VfbcGEynbMq6gWCRxFBGsVXkQ2j1yKkTuchDab1PBJ7Yqzrtnx9JujD5DufBgCdVXeGrpaR8acbHnvNb8LniFO5QFBZSOel7HmqE_7NWBxNwjSGyiLtvFDcQ4l57qvQ1DjhphzPknE0FZz1Hp1AIPJ5TA4Vk30NpU8CSf4dD7dS_ZQ-rXkbtXdXG9nV8__dhi6IeEIsouaL2AasbpirgfS1tRUFFe7_RDYtOHhXDsOs3OWnYTg"
               />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between py-2">
              <div>
                <span className="bg-primary/20 text-primary text-xs font-black px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest">Editor's Choice</span>
                <h3 className="text-4xl font-black mt-4 leading-tight">2023 Audi RS5 Performance</h3>
                <p className="text-gray-900 mt-4 leading-relaxed">Save up to $8,400 with our exclusive financing rates for premium members.</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm line-through">$80,400</p>
                  <p className="text-primary text-3xl font-black">$72,000</p>
                </div>
                <button className="bg-primary text-primary-content size-14 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                  <MdArrowForward size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-base-200 rounded-3xl p-8 border border-base-300 flex flex-col justify-between">
          <div>
            <h4 className="text-2xl text-primary mb-4">Limited Time Offer</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Trade in your old vehicle and get $2,000 above market value. Offer expires in 48 hours.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-base-100 p-4 rounded-xl border border-base-300 flex items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-lg"><MdTimer className="text-primary" size={24} /></div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Ends In</p>
                <p className="text-primary">47:12:05</p>
              </div>
            </div>
            <button className="w-full border-2 border-primary text-primary font-black py-4 rounded-xl hover:bg-primary hover:text-primary-content transition-all uppercase tracking-widest text-sm">Claim Offer</button>
          </div>
        </div>
      </div>
      
       <div className="mt-12 bg-primary rounded-[2.5rem] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <MdSell className="fixed-bg-icon -right-20 -top-20 text-gray-900" size={400} />
        </div>
        <div className="relative z-10 px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-secondary text-5xl font-black mb-4 tracking-tight">Ready to Upgrade? Sell Instantly.</h3>
            <p className="text-secondary text-xl max-w-2xl font-medium">Skip the dealership hassle. Get a competitive cash offer for your car in less than 24 hours with our AI-powered valuation engine.</p>
          </div>
          <div className="md:w-1/3 flex flex-col sm:flex-row gap-4 w-full">
            <button className="flex-1 bg-gray-900 text-white font-black px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-xl">
               Get Valuation
               <MdPayments size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
