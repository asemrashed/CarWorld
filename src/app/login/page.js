"use client";
import Link from "next/link";
import { MdEmail, MdLock } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === "testuser@gmail.com" && password === "Asdfgh") {
      Cookies.set("auth", "true", { expires: 7 }); 
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        router.push("/"); 
        router.refresh(); 
      });
    } else {
      Swal.fire({
        title: "Invalid Credentials",
        text: "Please use testuser@gmail.com / Asdfgh",
        icon: "error"
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-3xl border border-base-300 shadow-xl">
        <h1 className="text-4xl font-black mb-2 text-center text-primary">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-8">Sign in to your account</p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <div className="relative">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="input input-bordered w-full pl-12 bg-base-100 focus:input-primary" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
             <div className="relative">
              <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered w-full pl-12 bg-base-100 focus:input-primary" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <label className="label">
              <Link href="#" className="label-text-alt link link-primary no-underline">Forgot password?</Link>
            </label>
          </div>

          <button className="btn btn-primary w-full text-lg mt-4 font-black text-primary-content" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Don't have an account? <Link href="/register" className="link link-primary font-bold no-underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

