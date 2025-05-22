import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-[#fff9f3] via-[#e0f4ff] to-[#f7e8ff] -mt-10">
      
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-300 opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300 opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-20 left-1/4 w-12 h-12 rounded-full bg-yellow-300 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-8 h-8 rounded-full bg-sky-300 opacity-30 animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Text Section */}
          <motion.div
  className="md:col-span-7 z-10 px-4 sm:px-6"
  initial="hidden"
  animate={isLoaded ? "visible" : "hidden"}
  variants={containerVariants}
>
  <motion.h5
    className="text-red-600 font-medium mb-2 tracking-widest uppercase text-sm sm:text-base"
    variants={itemVariants}
  >
    Welcome to Avenues Global School
  </motion.h5>

  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 sm:mb-6 text-gray-900"
    variants={itemVariants}
  >
    <span className="text-sky-700 block">Nurturing Young Minds,</span>
    <span className="text-red-600 mt-1 sm:mt-2 block">Building Future Leaders.</span>
  </motion.h1>

  <motion.p
    className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md sm:max-w-xl leading-relaxed"
    variants={itemVariants}
  >
    Avenues Global School provides exceptional education that inspires creativity,
    fosters intellectual growth, and develops well-rounded individuals in a
    supportive and innovative environment.
  </motion.p>

  <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4" variants={itemVariants}>
    <Button
      size="lg"
      className="bg-green-500 hover:bg-green-600 group transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-full px-6"
    >
      <GraduationCap className="mr-2 h-5 w-5" />
      <span>Explore Our Programs</span>
      <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
    </Button>

    <Link to="/contact">
      <Button
        size="lg"
        variant="outline"
        className="border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md rounded-full px-6"
      >
        Contact Us <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </motion.div>
</motion.div>


          {/* Image Section */}
         {/* Image Section */}
<motion.div
  className="md:col-span-5 flex justify-center md:justify-end"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.7, delay: 0.5 }}
>
  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    {/* Border Layers */}
    <div className="absolute top-4 -left-4 w-full h-full rounded-2xl border-4 border-yellow-300 opacity-30 transform rotate-3 hidden sm:block"></div>
    <div className="absolute top-8 -left-8 w-full h-full rounded-2xl border-4 border-red-300 opacity-20 transform rotate-6 hidden sm:block"></div>

    <img
      src="/lovable-uploads/img4.png"
      alt="Avenues Students"
      className="relative z-10 w-full rounded-[2.0rem] mt-4 md:mt-0 lg:-mt-40 transition-all"
    />

    {/* Badge Box */}
    <div className="absolute -bottom-6 -right-4 bg-white rounded-xl p-3 shadow-lg z-20">
      <div className="flex items-center">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-red-400"></div>
          <div className="w-8 h-8 rounded-full bg-green-400"></div>
          <div className="w-8 h-8 rounded-full bg-blue-400"></div>
        </div>
        <div className="ml-2">
          <p className="text-xs font-semibold text-gray-600">Established</p>
          <p className="text-lg font-bold text-gray-900">2005</p>
        </div>
      </div>
    </div>
  </div>
</motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
