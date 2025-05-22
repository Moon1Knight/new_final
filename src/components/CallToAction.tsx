
import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-school-blue-dark to-school-blue opacity-95 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <motion.div 
              className="md:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                Join Our Academic Community
              </h2>
              <p className="text-blue-100 text-lg mb-0">
                Enrollment for the next academic year is now open. Secure your child's place at Avenues.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:col-span-4 flex justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-school-blue-dark hover:bg-blue-50 transition-all duration-300 rounded-full px-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <GraduationCap className="mr-2 h-5 w-5" /> Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {[
              { label: "Application Deadline", value: "May 30, 2025" },
              { label: "Classes Begin", value: "August 15, 2025" },
              { label: "Available Seats", value: "Limited" },
              { label: "Financial Aid", value: "Available" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <p className="text-white text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-display text-xl font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
