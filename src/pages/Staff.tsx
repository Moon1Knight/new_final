import React, { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { StaffSkeleton } from '@/components/skeletons/StaffSkeleton';

const Staff = () => {
  const facultyMembers = [
    { name: "S.A.V. Sushitha", imageUrl: "/Faculty/Staff/S.A.V.SUJATHA-M.COM-B.ED.jpeg", designation: "Principal" },
    { name: "M.B. Thara", imageUrl: "/Faculty/Staff/M.B.THARA-B.COM-B.ED.jpeg", designation: "Social Studies – Teacher" },
    { name: "S. Haveela", imageUrl: "/Faculty/Staff/S.HAVEELA-M.SC-B.ED.jpg", designation: "Science – Teacher" },
    { name: "Madhu Shree Jhawar", imageUrl: "/Faculty/Staff/MADHU-SHREE-JHAWAR-M.COM.jpg", designation: "Kindergarten – Teacher" },
    { name: "A. Sri Sowjanya", imageUrl: "/Faculty/Staff/A.SRI-SOWJANYA-M.SC-B.ED.jpeg", designation: "Physical Sciences – Senior Teacher" },
    { name: "M. Sushmitha Sravanthi", imageUrl: "/Faculty/Staff/M.SUSHMITHA-SRAVANTHI-M.SC.jpg", designation: "English – Teacher" },
    { name: "G. Bhargav Krishna", imageUrl: "/Faculty/Staff/G.BHARGAV-KRISHNA-B.TECH.jpg", designation: "Mathematics – Teacher" },
    { name: "P. Nithil", imageUrl: "/Faculty/Staff/P.NITHIL-B.TECH-B.ED.jpg", designation: "Mathematics – Teacher" },
    { name: "Rehana", imageUrl: "/Faculty/Staff/REHANA-B.COM-H.P.T.jpeg", designation: "Hindi – Teacher" },
    { name: "V. Sirisha", imageUrl: "/Faculty/Staff/V.SIRISHA-M.A-T.P.T.jpeg", designation: "Telugu – Teacher" },
    { name: "V. Rajeswari", imageUrl: "/Faculty/Staff/V.RAJESWARI-B.A-B.ED.jpeg", designation: "Telugu – Teacher" },
    { name: "Rajni Kumari", imageUrl: "/Faculty/Staff/RAJNI-KUMARI-M.B.A-B.ED.jpeg", designation: "English – Teacher" },
    { name: "R. Roshita", imageUrl: "/Faculty/Staff/R.ROSHITA-B.COM.jpeg", designation: "Kindergarten – Teacher" },
    { name: "A. Alekhya", imageUrl: "/Faculty/Staff/A.ALEKHYA-B.PHARMACY.jpeg", designation: "Biology – Teacher" },
    { name: "G. Pushpa Kumari", imageUrl: "/Faculty/Staff/G.PUSHPA-KUMARI-M.B.A-B.ED.jpeg", designation: "English – Teacher" },
    { name: "K. Jhansi", imageUrl: "/Faculty/Staff/K.JHANSI-B.A.jpeg", designation: "Asst. Teacher" },
    { name: "B. Kumari", imageUrl: "/Faculty/Staff/B.KUMARI-M.A-B.ED.jpg", designation: "Art/Craft Teacher" },
    { name: "G. Harika", imageUrl: "/Faculty/Staff/G.HARIKA-B.TECH-D.ED.jpg", designation: "Mathematics – Teacher" }
  ];

  const officeStaff = [
    { name: "K. Durga Bhavani", imageUrl: "/Faculty/Staff/BHAVANI.jpg", designation: "Accounts" },
    { name: "M.S.S. Durga Devi", imageUrl: "/Faculty/Staff/M.DEVI.jpg", designation: "Computer Operator" },
    { name: "R. Srinivas", imageUrl: "/Faculty/Staff/R.Srinivas.jpeg", designation: "Manager" }
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

  const renderCards = (list: typeof facultyMembers) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      {list.map((member, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
          className="relative group cursor-pointer"
        >
          {/* Purple glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
  
          {/* Card */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md border border-purple-100 group-hover:shadow-xl transition-all duration-300">
            
            {/* Image or initials */}
            <div className="relative overflow-hidden">
              <div className="w-[35mm] h-[45mm] mx-auto bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                {member.imageUrl ? (
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                )}
              </div>
  
              {/* Pin-like circle top-right */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full transform -rotate-45"></div>
              </div>
            </div>
  
            {/* Text & hover effects */}
            <div className="p-3 text-center relative">
              <h3 className="text-sm font-semibold text-fuchsia-600 group-hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                {member.name}
              </h3>
  
              {/* Expanding purple underline */}
              <div className="w-10 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto my-1 rounded-full group-hover:w-full transition-all duration-500"></div>
  
              <p className="text-xs text-fuchsia-600">{member.designation}</p>
            </div>
          </div>

          {/* Bouncing dot positioned outside top-right of the card */}
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce shadow-lg border-2 border-white"></div>
        </motion.div>
      ))}
    </motion.div>
  );
  

  return (
    <Suspense fallback={<StaffSkeleton />}>
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
              Meet our dedicated team of educators who inspire, guide, and nurture our students.
            </p>
          </motion.div>

          {renderCards(facultyMembers)}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Office Staff</h2>
            {renderCards(officeStaff)}
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
                Our faculty bring together decades of combined experience, advanced degrees, and a 
                passionate commitment to student success.
              </p>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Staff;