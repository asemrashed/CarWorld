import { MdSearch } from "react-icons/md";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Premium Marketplace</span>
          <h1 className="text-6xl font-black leading-[1.1] tracking-tight">Find Your Next <br/><span className="text-primary">Masterpiece</span></h1>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">Experience the ultimate luxury of choice with our curated selection of high-performance vehicles and electric innovations.</p>
        </div>
        
        <div className="bg-base-200 p-6 rounded-2xl shadow-xl border border-base-300 max-w-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Make/Model</label>
              <select className="select select-bordered select-sm w-full bg-base-100 border-none rounded-lg focus:ring-primary focus:outline-none">
                <option>All Brands</option>
                <option>Porsche</option>
                <option>BMW</option>
                <option>Audi</option>
                <option>Tesla</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Body Type</label>
              <select className="select select-bordered select-sm w-full bg-base-100 border-none rounded-lg focus:ring-primary focus:outline-none">
                <option>Any Type</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Coupe</option>
              </select>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Price Range</label>
              <select className="select select-bordered select-sm w-full bg-base-100 border-none rounded-lg focus:ring-primary focus:outline-none">
                <option>Any Price</option>
                <option>$50k - $100k</option>
                <option>$100k - $200k</option>
                <option>$200k+</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-primary text-primary-content font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
            <MdSearch size={20} />
            SEARCH INVENTORY
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl"></div>
        <img 
          alt="Hero Car" 
          className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]" 
          data-alt="Modern sleek electric vehicle in a studio" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7A9h3zI6Qx06wsIsONWO7exjWOtluO9vPgPO4qalc6VzBgsQgf5ypP4yexuiHz4LEWF03h5rgxt1nVRga2IDjW-HPNgrXZtiwdZ3PGuHG1aGGm2VYwIVzw_xoohKDm5IWYYeWQX8ze1LMfKclEh1NxXUucfgYU2nALkoY2TdTJFY_ZkyyTlyFiwbb_r7NhtGGAn7Hjz7jFJbWLk1VJRGtXJtyG6IUgVzCebo5FwUq8921FD7JKbntcquHPcuIfJAMdaTB1KIi8Q"
        />
      </div>
    </section>
  );
}
