
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactInformation = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-display font-bold text-school-blue mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-school-blue/10 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-school-blue" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Our Location</h3>
            <p className="text-gray-600">Rajahmundry, Andhra Pradesh, IN</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-school-green/10 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-school-green" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Phone Number</h3>
            <p className="text-gray-600">+91 7997043399</p>
            {/* <p className="text-gray-600">+1 (987) 654-3210</p> */}
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-school-orange/10 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-school-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Email Address</h3>
            <p className="text-gray-600">avenuesglobalschool@gmail.com</p>
            {/* <p className="text-gray-600">admissions@smartavenues.edu</p> */}
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-school-red/10 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-school-red" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">Follow Us On</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-school-blue-dark text-white p-2 rounded-full hover:bg-school-orange transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="bg-school-blue-dark text-white p-2 rounded-full hover:bg-school-orange transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="bg-school-blue-dark text-white p-2 rounded-full hover:bg-school-orange transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
