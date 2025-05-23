import React from 'react';
import SchoolLogo from './SchoolLogo';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection = ({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3
      className={`font-display font-semibold text-lg mb-6 text-gray-800 relative pb-3`}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 w-10 h-1 bg-${color}`}
        style={{ content: "''" }}
      />
    </h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-school-blue opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-school-green opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16">
          {/* Logo & Socials */}
          <div>
            <Link to="/">
              <SchoolLogo className="mb-4 transform hover:scale-105 transition-transform" />
            </Link>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Avenues is dedicated to providing quality education that nurtures young minds and prepares them for future success through holistic development.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-school-blue text-white flex items-center justify-center hover:bg-school-orange transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links" color="school-orange">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Academics', href: '/academics' },
              { label: 'Admissions', href: '/admissions' },
              { label: 'News & Events', href: '/news' },
              { label: 'Contact', href: '/contact' },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-school-blue transition-colors flex items-center"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-school-orange" />
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterSection>

          {/* Programs */}
          <FooterSection title="Programs" color="school-green">
            {[
              { label: 'Early Years', href: '/academics#early-years' },
              { label: 'Primary School', href: '/academics#primary' },
              { label: 'Secondary School', href: '/academics#secondary' },
              { label: 'Extra-Curricular', href: '/academics#extra' },
              { label: 'Summer Programs', href: '/academics#summer' },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-school-green transition-colors flex items-center"
                >
                  <Check className="mr-2 h-4 w-4 text-school-green" />
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Us" color="school-blue">
            <li className="flex items-start text-sm">
              <MapPin className="h-5 w-5 text-school-blue mr-3 mt-1" />
              123 Education Street, Knowledge City, 12345
            </li>
            <li className="flex items-center text-sm">
              <Phone className="h-5 w-5 text-school-green mr-3" />
              +1 (123) 456-7890
            </li>
            <li className="flex items-center text-sm">
              <Mail className="h-5 w-5 text-school-orange mr-3" />
              info@smartavenues.edu
            </li>
          </FooterSection>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 pb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Avenues Global School. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
