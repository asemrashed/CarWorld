import { cars } from "../../../data/cars";
import { MdSpeed, MdSettings, MdEvStation, MdElectricCar, MdArrowBack } from "react-icons/md";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id.toString(),
  }));
}

export default async function CarDetails({ params }) {
  const { id } = await params;
  const car = cars.find((c) => c.id.toString() === id);

  if (!car) {
    notFound();
  }

  const getIcon = (type) => {
    switch (type) {
      case 'mileage': return <MdSpeed className="text-xl text-primary" />;
      case 'transmission': return <MdSettings className="text-xl text-primary" />;
      case 'fuel': return <MdEvStation className="text-xl text-primary" />;
      case 'electric': return <MdElectricCar className="text-xl text-primary" />;
      default: return <MdSpeed className="text-xl text-primary" />;
    }
  };

  return (
    <div className="space-y-8">
      <Link href="/all-collections" className="btn btn-ghost gap-2 pl-0 hover:bg-transparent hover:text-primary">
        <MdArrowBack size={20} /> Back to Collections
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img src={car.image_url || car.image} alt={car.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square rounded-xl bg-base-200 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={car.image_url || car.image} className="w-full h-full object-cover" alt="" />
                </div>
             ))}
          </div>
        </div>

        <div className="space-y-8">
           <div>
             <div className="flex items-center gap-4 mb-2">
                <span className="bg-primary/20 text-primary text-xs font-black px-3 py-1 rounded-full border border-primary/30 uppercase tracking-widest">{car.category}</span>
                {car.mileage === 0 && <span className="bg-green-500/20 text-green-600 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">Brand New</span>}
             </div>
             <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-primary">{car.name}</h1>
             <p className="text-3xl font-black">${car.price.toLocaleString()}</p>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-base-200 p-4 rounded-xl flex items-center gap-4">
                 <div className="bg-base-100 p-3 rounded-full">{getIcon('mileage')}</div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Mileage</p>
                    <p className="font-bold">{car.mileage} mi</p>
                 </div>
              </div>
              <div className="bg-base-200 p-4 rounded-xl flex items-center gap-4">
                 <div className="bg-base-100 p-3 rounded-full">{getIcon('transmission')}</div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Transmission</p>
                    <p className="font-bold">{car.transmission}</p>
                 </div>
              </div>
              <div className="bg-base-200 p-4 rounded-xl flex items-center gap-4">
                 <div className="bg-base-100 p-3 rounded-full">{car.fuel_type === 'Electric' ? getIcon('electric') : getIcon('fuel')}</div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Fuel Type</p>
                    <p className="font-bold">{car.fuel_type}</p>
                 </div>
              </div>
               <div className="bg-base-200 p-4 rounded-xl flex items-center gap-4">
                 <div className="bg-base-100 p-3 rounded-full"><MdSettings className="text-xl text-primary"/></div>
                 <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Model Year</p>
                    <p className="font-bold">{car.year}</p>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <h3 className="text-xl font-bold">Key Features</h3>
              <ul className="grid grid-cols-1 gap-2">
                 {car.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-500">
                       <span className="size-2 rounded-full bg-primary" /> {feature}
                    </li>
                 ))}
              </ul>
           </div>

           <div className="flex gap-4 pt-4 border-t border-base-300">
              <button className="btn btn-primary btn-lg flex-1 text-primary-content">Book Test Drive</button>
              <button className="btn btn-outline btn-lg flex-1 hover:bg-base-content hover:text-base-100">Make an Offer</button>
           </div>
        </div>
      </div>
    </div>
  );
}
