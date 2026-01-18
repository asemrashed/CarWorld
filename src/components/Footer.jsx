import Link from "next/link";
import { MdDirectionsCar, MdShare, MdChatBubble, MdFacebook } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300 py-20 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg flex items-center justify-center text-primary-content">
              <MdDirectionsCar size={24} />
            </div>
            <h2 className="text-2xl font-black tracking-tight">CarMarket</h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            The world's leading luxury car marketplace. We connect passionate drivers with exceptional vehicles through a seamless digital experience.
          </p>
          <div className="flex gap-4">
            <button className="size-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all">
              <MdFacebook size={20} />
            </button>
            <button className="size-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all">
              <MdShare size={20} />
            </button>
            <button className="size-10 rounded-full bg-base-300 flex items-center justify-center hover:bg-primary hover:text-primary-content transition-all">
              <MdChatBubble size={20} />
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-black uppercase tracking-widest text-sm text-base-content">Inventory</h5>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link className="hover:text-primary transition-colors" href="/all-collections">Electric Cars</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/all-collections">SUVs & Trucks</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/all-collections">Sedans</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/all-collections">Classic Cars</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-black uppercase tracking-widest text-sm text-base-content">Company</h5>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link className="hover:text-primary transition-colors" href="/about-us">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Our Process</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Reviews</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="font-black uppercase tracking-widest text-sm text-base-content">Support</h5>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link className="hover:text-primary transition-colors" href="#">Help Center</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Terms of Use</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© 2024 CarMarket Premium. All rights reserved.</p>
        <div className="flex gap-8 text-xs text-gray-500">
          <span>Designed for the modern road</span>
        </div>
      </div>
    </footer>
  );
}
