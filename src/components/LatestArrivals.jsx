import Link from "next/link";
import CarCard from "./CarCard";
import { cars } from "../data/cars";
import { MdArrowForward } from "react-icons/md";

export default function LatestArrivals() {
  const displayCars = cars.slice(0, 8);
  
  return (
    <section>
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl font-black">Latest Arrivals</h2>
        <Link href="/all-collections" className="text-primary font-bold flex items-center gap-2 group">
          View All Collections <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </section>
  );
}

