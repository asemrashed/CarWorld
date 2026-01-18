import { MdArrowForward, MdElectricCar, MdDirectionsCar, MdBolt, MdMinorCrash, MdAirportShuttle, MdLocalFireDepartment } from "react-icons/md";

// Using closest matches for icons
// Electric Car -> electric_car -> MdElectricCar
// Sedan -> directions_car -> MdDirectionsCar
// EV -> bolt -> MdBolt
// Coupe -> minor_crash -> MdMinorCrash (visual approx)
// Van -> airport_shuttle -> MdAirportShuttle
// Pickup -> fire_truck (original) -> replaced with generic car or similar? Let's use MdLocalFireDepartment as placeholder or MdDirectionsCar
// Actually better for Pickup: MdLocalShipping (truck)

import { MdLocalShipping } from "react-icons/md";

export default function Category() {
  const categories = [
    { name: "SUV", icon: <MdElectricCar size={32} /> },
    { name: "Sedan", icon: <MdDirectionsCar size={32} /> },
    { name: "EV", icon: <MdBolt size={32} /> },
    { name: "Coupe", icon: <MdMinorCrash size={32} /> },
    { name: "Van", icon: <MdAirportShuttle size={32} /> },
    { name: "Pickup", icon: <MdLocalShipping size={32} /> },
  ];

  return (
    <section>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black">Browse by Body</h2>
          <p className="text-gray-500 mt-2">Find the shape that fits your lifestyle</p>
        </div>
        {/* <button className="text-primary font-bold flex items-center gap-2 group">
          View All Categories <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
        </button> */}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="bg-base-200 border border-base-300 p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-primary transition-all cursor-pointer group hover:bg-base-300/50">
            <div className="size-16 rounded-full bg-base-300 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-content transition-all text-primary">
              {cat.icon}
            </div>
            <span className="font-bold">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
