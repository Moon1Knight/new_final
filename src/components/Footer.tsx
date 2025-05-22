
import React from 'react';
import SchoolLogo from './SchoolLogo';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-school-blue opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-school-green opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        {/* <div className="bg-gradient-to-r from-school-blue-dark to-school-blue text-white rounded-2xl p-8 md:p-10 max-w-5xl mx-auto mb-16 shadow-xl transform -translate-y-20">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-blue-100">
                Stay updated on school events, educational resources, and announcements
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
                />
                <Button size="default" className="bg-white text-school-blue-dark hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Subscribe <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-16">
          <div>
            <Link to="/">
              <SchoolLogo className="mb-4 transform hover:scale-105 transition-transform" />
            </Link>
            <p className="text-gray-600 mb-6">
              Avenues is dedicated to providing quality education that nurtures young minds and prepares them for future success through holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-school-blue text-white flex items-center justify-center hover:bg-school-orange transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-school-blue text-white flex items-center justify-center hover:bg-school-orange transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-school-blue text-white flex items-center justify-center hover:bg-school-orange transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-gray-800 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-1 before:bg-school-orange">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Academics', href: '/academics' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'News & Events', href: '/news' },
                { label: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-school-blue transition-colors flex items-center"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 text-school-orange" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-gray-800 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-1 before:bg-school-green">
              Programs
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Early Years', href: '/academics#early-years' },
                { label: 'Primary School', href: '/academics#primary' },
                { label: 'Secondary School', href: '/academics#secondary' },
                { label: 'Extra-Curricular', href: '/academics#extra' },
                { label: 'Summer Programs', href: '/academics#summer' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-school-green transition-colors flex items-center"
                  >
                    <Check className="mr-2 h-4 w-4 text-school-green" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-gray-800 relative pb-3 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-10 before:h-1 before:bg-school-blue">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-school-blue mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Education Street, Knowledge City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-school-green mr-3 flex-shrink-0" />
                <span className="text-gray-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-school-orange mr-3 flex-shrink-0" />
                <span className="text-gray-600">info@smartavenues.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 pb-12 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Avenues Global School. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
