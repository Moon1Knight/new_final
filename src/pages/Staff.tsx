import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Staff = () => {
  const facultyMembers = [
    { name: "A. ALEKHYA", imageUrl: "/Faculty/Staff/A.ALEKHYA-B.PHARMACY.jpeg" },
    { name: "A. SRI SOWJANYA", imageUrl: "/Faculty/Staff/A.SRI-SOWJANYA-M.SC-B.ED.jpeg" },
    { name: "B. KUMARI", imageUrl: "/Faculty/Staff/B.KUMARI-M.A-B.ED.jpg" },
    { name: "G. BHARGAV KRISHNA", imageUrl: "/Faculty/Staff/G.BHARGAV-KRISHNA-B.TECH.jpg" },
    { name: "G. PUSHPA KUMARI", imageUrl: "/Faculty/Staff/G.PUSHPA-KUMARI-M.B.A-B.ED.jpeg" },
    { name: "K. JHANSI", imageUrl: "/Faculty/Staff/K.JHANSI-B.A.jpeg" },
    { name: "M.B. THARA", imageUrl: "/Faculty/Staff/M.B.THARA-B.COM-B.ED.jpeg" },
    { name: "M. SUSHMITHA SRAVANTHI", imageUrl: "/Faculty/Staff/M.SUSHMITHA-SRAVANTHI-M.SC.jpg" },
    { name: "MADHU SHREE JHAWAR", imageUrl: "/Faculty/Staff/MADHU-SHREE-JHAWAR-M.COM.jpg" },
    { name: "P. NITHIL", imageUrl: "/Faculty/Staff/P.NITHIL-B.TECH-B.ED.jpg" },
    { name: "R. ROSHITA", imageUrl: "/Faculty/Staff/R.ROSHITA-B.COM.jpeg" },
    { name: "RAJNI KUMARI", imageUrl: "/Faculty/Staff/RAJNI-KUMARI-M.B.A-B.ED.jpeg" },
    { name: "REHANA", imageUrl: "/Faculty/Staff/REHANA-B.COM-H.P.T.jpeg" },
    { name: "S.A.V. SUJATHA", imageUrl: "/Faculty/Staff/S.A.V.SUJATHA-M.COM-B.ED.jpeg" },
    { name: "S. HAVEELA", imageUrl: "/Faculty/Staff/S.HAVEELA-M.SC-B.ED.jpg" },
    { name: "V. RAJESWARI", imageUrl: "/Faculty/Staff/V.RAJESWARI-B.A-B.ED.jpeg" },
    { name: "V. SIRISHA", imageUrl: "/Faculty/Staff/V.SIRISHA-M.A-T.P.T.jpeg" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-25 to-gray-100">
      <Navigation />
      <div className="container mx-auto px-3 py-12 max-w-[85rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-lg">
            Our Faculty
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Meet our dedicated team of educators who inspire, guide, and nurture our students 
            towards academic excellence and personal growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
              className={`
                relative group cursor-pointer
                ${index % 4 === 0 ? 'lg:col-span-1' : ''}
                ${index % 7 === 0 ? 'xl:transform xl:rotate-2' : ''}
                ${index % 9 === 0 ? 'xl:transform xl:-rotate-1' : ''}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-md border border-purple-100 group-hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="w-[35mm] h-[45mm] mx-auto bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    {faculty.imageUrl ? (
                      <img 
                        src={faculty.imageUrl} 
                        alt={faculty.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center">
                        <div className="text-white text-4xl font-bold">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                    {faculty.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Excellence in Education
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify tracking-wide">
              Our faculty members bring together decades of combined experience, advanced degrees, and a 
              passionate commitment to student success. Each educator contributes their unique expertise 
              to create a rich, diverse learning environment where every student can thrive and reach 
              their full potential.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
