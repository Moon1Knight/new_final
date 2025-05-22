import React from 'react';
import SchoolLogo from './SchoolLogo';
import { motion } from 'framer-motion';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse' as const,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-4">
      <div className="mb-6 sm:mb-8 scale-110 sm:scale-125">
        <SchoolLogo />
      </div>

      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-school-blue-dark mb-4">
          Avenues Global School
        </div>

        <div className="flex items-center space-x-2 mb-6 sm:mb-8">
          <motion.div variants={dotVariants} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-school-red" />
          <motion.div variants={dotVariants} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-school-orange" />
          <motion.div variants={dotVariants} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-school-green" />
          <motion.div variants={dotVariants} className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-school-blue" />
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '180px' }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-1 bg-gradient-to-r from-school-blue via-school-green to-school-orange rounded-full w-[180px] sm:w-[200px]"
        />
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
