"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { MdDirectionsCar, MdSearch, MdPerson, MdLightMode, MdDarkMode, MdMenu, MdClose, MdLogout } from "react-icons/md";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    // Check auth status
    const auth = Cookies.get("auth");
    setIsAuthenticated(!!auth);
  }, []);

  // Watch for cookie changes
  useEffect(() => {
     const interval = setInterval(() => {
        const auth = Cookies.get("auth");
        if (!!auth !== isAuthenticated) {
           setIsAuthenticated(!!auth);
        }
     }, 1000); 
     return () => clearInterval(interval);
  }, [isAuthenticated]);

  const isActive = (path) => pathname === path ? "text-primary font-bold" : "text-gray-500 font-medium hover:text-primary transition-colors";

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  const handleLogout = () => {
    Cookies.remove("auth");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-base-100/10 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center text-primary-content">
              <MdDirectionsCar size={24} />
            </div>
            <h2 className="text-2xl font-black tracking-tight">CarMarket</h2>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={isActive("/")}>Home</Link>
            <Link href="/all-collections" className={isActive("/all-collections")}>All Collections</Link>
            <Link href="/about-us" className={isActive("/about-us")}>About Us</Link>
            <Link href="/contact" className={isActive("/contact")}>Contact</Link>
            {isAuthenticated && <Link href="/sell" className={isActive("/sell")}>Sell Your Car</Link>}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              className="bg-base-200 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary w-64 outline-none transition-all placeholder:text-gray-500 text-base-content" 
              placeholder="Quick search..." 
              type="text"
            />
          </div>
          
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
               <button className="hidden sm:flex cursor-pointer items-center justify-center size-10 rounded-full bg-base-200 hover:bg-base-300 transition-colors">
                 <MdPerson size={20} />
               </button>
               <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                  <li><a className="font-bold">Profile</a></li>
                  <li><button onClick={handleLogout} className="text-error font-bold"><MdLogout/> Logout</button></li>
               </ul>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
            <Link href="/login" className="btn btn-sm btn-primary cursor-pointer rounded-full px-6">Sign In</Link>
            <Link href="/register" className="btn btn-sm btn-outline btn-primary hover:btn-primary cursor-pointer rounded-full px-6">Sign Up</Link>
            </div>
          )}

          {mounted && (
            <button 
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="flex items-center justify-center size-10 cursor-pointer rounded-full bg-base-200 hover:bg-base-300 transition-colors text-primary"
            >
              {isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </button>
          )}

          <button 
            className="lg:hidden flex items-center justify-center size-10 rounded-full bg-base-200 hover:bg-base-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-base-100 border-b border-base-300 p-6 flex flex-col gap-4 shadow-xl">
           <Link href="/" className={isActive("/")} onClick={() => setIsMenuOpen(false)}>Home</Link>
           <Link href="/all-collections" className={isActive("/all-collections")} onClick={() => setIsMenuOpen(false)}>All Collections</Link>
           <Link href="/about-us" className={isActive("/about-us")} onClick={() => setIsMenuOpen(false)}>About Us</Link>
           <Link href="/contact" className={isActive("/contact")} onClick={() => setIsMenuOpen(false)}>Contact</Link>
           <Link href="/sell" className={isActive("/sell")} onClick={() => setIsMenuOpen(false)}>Sell Your Car</Link>
           <div className="relative mt-4">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              className="bg-base-200 w-full border-none rounded-full pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none text-base-content" 
              placeholder="Quick search..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn btn-sm btn-primary cursor-pointer rounded-full px-6">Sign In</Link>
            <Link href="/register" className="btn btn-sm btn-outline btn-primary hover:btn-primary cursor-pointer rounded-full px-6">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}

