"use client";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MdDriveFileRenameOutline, MdAttachMoney, MdImage, MdCategory, MdDescription } from "react-icons/md";

export default function SellCar() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Success! Post Under Development",
      text: "We have received your car details. Our team will review it shortly.",
      icon: "success",
      confirmButtonColor: "#87CEEB",
      background: "#1f2937",
      color: "#fff"
    });
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black mb-4 text-primary">Sell Your Car</h1>
        <p className="text-gray-500 text-lg">Get the best value for your vehicle with our premium listing service.</p>
      </div>

      <div className="bg-base-200 p-8 md:p-12 rounded-3xl border border-base-300 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">Car Model Name</span>
              </label>
              <div className="relative">
                <MdDriveFileRenameOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="text" 
                  placeholder="e.g. Tesla Model S" 
                  className={`input input-bordered w-full pl-12 bg-base-100 focus:input-primary ${errors.name ? 'input-error' : ''}`}
                  {...register("name", { required: "Car name is required" })}
                />
              </div>
              {errors.name && <span className="text-error text-xs mt-1">{errors.name.message}</span>}
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">Price (USD)</span>
              </label>
              <div className="relative">
                <MdAttachMoney className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="number" 
                  placeholder="e.g. 85000" 
                  className={`input input-bordered w-full pl-12 bg-base-100 focus:input-primary ${errors.price ? 'input-error' : ''}`}
                  {...register("price", { required: "Price is required", min: 0 })}
                />
              </div>
              {errors.price && <span className="text-error text-xs mt-1">{errors.price.message}</span>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">Category</span>
              </label>
              <div className="relative">
                <MdCategory className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <select 
                  className={`select select-bordered w-full pl-12 bg-base-100 focus:select-primary ${errors.category ? 'select-error' : ''}`}
                  {...register("category", { required: "Category is required" })}
                >
                  <option value="">Select Category</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Truck">Truck</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Convertible">Convertible</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
               {errors.category && <span className="text-error text-xs mt-1">{errors.category.message}</span>}
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">Image URL</span>
              </label>
              <div className="relative">
                <MdImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                 <input 
                  type="url" 
                  placeholder="https://..." 
                  className={`input input-bordered w-full pl-12 bg-base-100 focus:input-primary ${errors.image ? 'input-error' : ''}`}
                  {...register("image", { required: "Image URL is required" })}
                />
              </div>
              {errors.image && <span className="text-error text-xs mt-1">{errors.image.message}</span>}
            </div>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea 
              className="textarea textarea-bordered h-32 bg-base-100 focus:textarea-primary" 
              placeholder="Describe the condition, features, and history of the car..."
              {...register("description")}
            ></textarea>
          </div>

          <button className="btn btn-primary btn-lg w-full font-black text-primary-content mt-4">Post Vehicle</button>
        </form>
      </div>
    </div>
  );
}
