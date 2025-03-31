import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="container mx-auto px-3 py-11">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book an appointment? Reach out to our team using the contact information below.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden h-full">
              <img
                src={assets.contact}
                alt="Beauty salon interior"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Right Side - Contact Information */}
          <div className="md:w-1/2 bg-black text-white rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-300 font-medium mb-1">Address</h3>
                <p>123 Beauty Street</p>
                <p>Telangana, Tg 500092</p>
              </div>
              
              <div>
                <h3 className="text-gray-300 font-medium mb-1">Phone</h3>
                <p>+91 98765 43210</p>
              </div>
              
              <div>
                <h3 className="text-gray-300 font-medium mb-1">Email</h3>
                <p>contact@beautyname.com</p>
              </div>
              
              <div>
                <h3 className="text-gray-300 font-medium mb-1">Hours</h3>
                <p>Monday - Saturday: Available 24 hours</p>
                <p>Sunday: Available 24 hours</p>
                <p className="text-sm text-gray-400 mt-1">Appointments in 3-hour slots</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-gray-300 font-medium mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;