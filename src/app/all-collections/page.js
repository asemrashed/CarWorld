import { MdFilterList } from "react-icons/md";
import CarCard from "@/components/CarCard";
import { cars } from "../../data/cars";

export default function AllCollections() {
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-4xl font-black mb-2">All Collections</h1>
           <p className="text-gray-500">Explore our premium inventory of exceptional vehicles.</p>
        </div>
        <div className="flex gap-4">
            <select className="select select-bordered w-full max-w-xs bg-base-200">
                <option disabled selected>Sort by Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>
            <button className="btn btn-primary btn-outline gap-2">
                <MdFilterList size={20} /> Filter
            </button>
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
}

