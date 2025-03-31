import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-white bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">About Our Beauty Services</h1>
        
        <div className="flex justify-center mb-12">
          <img 
            src={assets.about} 
            alt="Our team of professional beauticians" 
            className="w-full md:w-3/4 rounded-xl shadow-lg"
          />
        </div>
        
        <div className="space-y-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Our Story</h2>
            <p className="leading-relaxed">
              Founded in 2018, our beauty service platform began with a simple mission: to connect clients with the finest beauticians in Hyderabad. What started as a small network of passionate makeup artists has grown into Telangana's premier beauty service marketplace, featuring skilled professionals across various beauty specializations.
            </p>
          </div>
          
          <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Our Mission</h2>
            <p className="leading-relaxed">
              We're committed to providing convenient access to premium beauty services while supporting talented local beauticians. Our platform aims to elevate the beauty service experience through quality, reliability, and personalized care for every client.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Why Choose Us</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-medium text-gray-100">Vetted Professionals:</span> Every beautician on our platform undergoes thorough vetting for qualifications, experience, and client satisfaction.</li>
              <li><span className="font-medium text-gray-100">Diverse Expertise:</span> From bridal makeup to hair styling, nail art to permanent makeup, we offer a comprehensive range of beauty services.</li>
              <li><span className="font-medium text-gray-100">Convenience:</span> Book appointments with top beauticians at your preferred time and location.</li>
              <li><span className="font-medium text-gray-100">Transparent Pricing:</span> Clear pricing with no hidden fees ensures you know exactly what to expect.</li>
              <li><span className="font-medium text-gray-100">Client-Focused:</span> Your satisfaction is our priority, with dedicated support for any concerns or special requests.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Our Services</h2>
            <p className="leading-relaxed mb-4">
              We offer a wide range of beauty services to meet all your needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bridal Makeup</li>
                  <li>HD Makeup</li>
                  <li>Party Makeup</li>
                  <li>Hair Styling</li>
                  <li>Nail Art</li>
                  <li>Permanent Makeup</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Threading</li>
                  <li>Saree Draping</li>
                  <li>Temporary Tattoos</li>
                  <li>Keratin Treatment</li>
                  <li>Pedicure Treatment</li>
                  <li>Manicure Treatment</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Join Our Community</h2>
            <p className="leading-relaxed">
              Whether you're a client seeking exceptional beauty services or a talented beautician looking to expand your clientele, we welcome you to join our growing community. Together, we're redefining beauty services in Hyderabad and beyond.
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-800 text-white rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
          <p className="text-center mb-4">
            Have questions or need assistance? Our team is here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition duration-300 font-medium">
              Contact Us
            </button>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-gray-700 transition duration-300 font-medium">
              Join As Beautician
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;