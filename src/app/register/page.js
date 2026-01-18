"use client";
import Link from "next/link";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";

export default function Register() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-3xl border border-base-300 shadow-xl">
        <h1 className="text-4xl font-black mb-2 text-center text-primary">Join CarMarket</h1>
        <p className="text-center text-gray-500 mb-8">Create your exclusive account</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <div className="relative">
              <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input type="text" placeholder="John Doe" className="input input-bordered w-full pl-12 bg-base-100 focus:input-primary" />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <div className="relative">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input type="email" placeholder="name@example.com" className="input input-bordered w-full pl-12 bg-base-100 focus:input-primary" />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
             <div className="relative">
              <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-12 bg-base-100 focus:input-primary" />
            </div>
          </div>

          <button className="btn btn-primary w-full text-lg mt-4 font-black text-primary-content">Create Account</button>
        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account? <Link href="/login" className="link link-primary font-bold no-underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
