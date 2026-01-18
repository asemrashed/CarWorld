import { MdSpeed, MdSettings, MdEvStation, MdElectricCar } from "react-icons/md";
import Link from "next/link";

export default function CarCard({ car }) {
  // Stats mapping to icons
  const getIcon = (type) => {
    switch (type) {
      case 'mileage': return <MdSpeed className="text-[16px] text-primary" />;
      case 'transmission': return <MdSettings className="text-[16px] text-primary" />;
      case 'fuel': return <MdEvStation className="text-[16px] text-primary" />;
      case 'electric': return <MdElectricCar className="text-[16px] text-primary" />;
      default: return <MdSpeed className="text-[16px] text-primary" />;
    }
  };

  return (
    <Link href={`/all-collections/${car.id}`} className="block group">
      <div className="bg-base-200 rounded-2xl overflow-hidden border border-base-300 group-hover:border-primary transition-all shadow-sm group-hover:shadow-md cursor-pointer">
        <div className="h-56 relative overflow-hidden">
          <img 
            alt={car.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            src={car.image_url || car.image} 
          />
          {car.tag && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary/90 text-primary-content text-[10px] font-black px-2 py-1 rounded">{car.tag}</span>
            </div>
          )}
        </div>
        <div className="p-5 space-y-4">
          <div>
            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{car.name}</h4>
            <p className="text-gray-500 text-sm">{car.category}</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500 border-y border-base-300 py-3">
             <span className="flex items-center gap-1.5">
               {getIcon('mileage')} {car.mileage ? `${car.mileage} mi` : 'New'}
             </span>
             <span className="flex items-center gap-1.5">
               {getIcon('transmission')} {car.transmission === 'Automatic' ? 'Auto' : 'Manual'}
             </span>
             <span className="flex items-center gap-1.5">
               {car.fuel_type === 'Electric' ? getIcon('electric') : getIcon('fuel')} {car.fuel_type}
             </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-primary text-xl font-black">${car.price?.toLocaleString()}</p>
            <button className="text-xs font-bold bg-base-300 px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-primary-content transition-colors">DETAILS</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

