"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your actual Service ID, Template ID, and Public Key
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    
    // For demonstration purposes, we'll simulate a success after 1 second
    setTimeout(() => {
        setStatus("success");
        form.current.reset();
    }, 1000);
    
    /* 
    // Uncomment this when you have your keys
    emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
      .then((result) => {
          setStatus("success");
          form.current.reset();
      }, (error) => {
          setStatus("error");
      });
    */
  };

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div>
             <h1 className="text-4xl font-black mb-4">Get in Touch</h1>
             <p className="text-gray-500">Have questions about a listing or want to sell your vehicle? We're here to help.</p>
        </div>
        
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="size-12 bg-base-200 rounded-full flex items-center justify-center text-primary">
                    <MdEmail size={24} />
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-400 uppercase">Email</p>
                    <p className="font-medium">contact@carmarket.premium</p>
                </div>
            </div>
             <div className="flex items-center gap-4">
                <div className="size-12 bg-base-200 rounded-full flex items-center justify-center text-primary">
                    <MdPhone size={24} />
                </div>
                 <div>
                    <p className="text-sm font-bold text-gray-400 uppercase">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                </div>
            </div>
             <div className="flex items-center gap-4">
                <div className="size-12 bg-base-200 rounded-full flex items-center justify-center text-primary">
                    <MdLocationOn size={24} />
                </div>
                 <div>
                    <p className="text-sm font-bold text-gray-400 uppercase">Headquarters</p>
                    <p className="font-medium">123 Autostrada Blvd, Los Angeles, CA</p>
                </div>
            </div>
        </div>
      </div>

      <div className="bg-base-200 p-8 rounded-3xl border border-base-300">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="space-y-2">
                <label className="font-bold ml-1">Name</label>
                <input type="text" name="user_name" required className="input input-bordered w-full bg-base-100 focus:input-primary" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
                <label className="font-bold ml-1">Email</label>
                <input type="email" name="user_email" required className="input input-bordered w-full bg-base-100 focus:input-primary" placeholder="john@example.com" />
            </div>
             <div className="space-y-2">
                <label className="font-bold ml-1">Message</label>
                <textarea name="message" required className="textarea textarea-bordered w-full bg-base-100 focus:textarea-primary h-32" placeholder="I'm interested in..." />
            </div>
            
            <button type="submit" className="btn btn-primary w-full text-lg" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && <p className="text-green-500 text-center font-bold">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 text-center font-bold">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </div>
  );
}
