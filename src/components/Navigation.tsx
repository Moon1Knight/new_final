import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import SchoolLogo from './SchoolLogo';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const navItems = [
    { 
      label: 'Home', 
      href: '/' 
    },
    { 
      label: 'About Us', 
      href: '/about',
      children: [
        { label: 'Our Story', href: '/about#story' },
        { label: 'Our Mission', href: '/about#mission' },
        { label: 'Our Team', href: '/about#team' }
      ]
    },
    { 
      label: 'Academics', 
      href: '/academics',
      children: [
        { label: 'Curriculum', href: '/academics#curriculum' },
        { label: 'Programs', href: '/academics#programs' },
        { label: 'Faculty', href: '/academics#faculty' }
      ]
    },
    { 
      label: 'Admissions', 
      href: '/admissions' 
    },
    { 
      label: 'News & Events', 
      href: '/news' 
    },
    { 
      label: 'Contact', 
      href: '/contact' 
    },
  ];

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Top Bar with Contact Info and Social Icons */}
      <div className="bg-gradient-to-r from-school-blue-dark to-school-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>Rajahmundry</span>
            </div>
            <div className="hidden md:flex items-center">
              <Phone className="h-3.5 w-3.5 mr-1" />
              <span>+91 7997043399</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="h-3.5 w-3.5 mr-1" />
              <span>avenuesglobalschool@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-school-orange transition-colors transform hover:scale-110">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-school-orange transition-colors transform hover:scale-110">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-school-orange transition-colors transform hover:scale-110">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <img 
                src='/lovable-uploads/logo.png' 
                alt="Avenues Logo"
                className="h-12 w-auto object-contain md:h-14 lg:h-16"
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group" onMouseEnter={() => handleDropdownToggle(item.label)} onMouseLeave={() => handleDropdownToggle(null)}>
                <Link
                  to={item.href}
                  className="font-medium text-gray-700 hover:text-school-blue px-4 py-2 rounded-md transition-colors flex items-center"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-school-blue"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <div className="ml-4">
              <Button className="bg-gradient-to-r from-school-orange to-school-red hover:from-school-red hover:to-school-orange text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-full px-6">
                Apply Now
              </Button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-2">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link 
                    to={item.href} 
                    className="font-medium text-gray-700 hover:text-school-blue py-3 border-b border-gray-100 flex justify-between items-center"
                    onClick={() => item.children ? handleDropdownToggle(item.label) : setIsMenuOpen(false)}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                  
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-gray-50 px-4 py-2 mb-2"
                    >
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-school-blue"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
              <div className="py-4">
                <Button className="bg-gradient-to-r from-school-orange to-school-red hover:from-school-red hover:to-school-orange text-white w-full rounded-full">
                  Apply Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
