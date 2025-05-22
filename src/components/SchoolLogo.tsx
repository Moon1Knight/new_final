
import React from 'react';

const SchoolLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex">
        <div className="bg-school-red p-2 text-white font-bold">
          <span className="text-2xl">A</span>
        </div>
        <div className="bg-school-orange p-2 text-white font-bold">
          <span className="text-2xl">V</span>
        </div>
        <div className="bg-school-green-dark p-2 text-white font-bold">
          <span className="text-2xl">E</span>
        </div>
        <div className="bg-school-green p-2 text-white font-bold">
          <span className="text-2xl">N</span>
        </div>
        <div className="bg-school-green-light p-2 text-white font-bold">
          <span className="text-2xl">U</span>
        </div>
        <div className="bg-school-blue-dark p-2 text-white font-bold">
          <span className="text-2xl">E</span>
        </div>
        <div className="bg-school-blue p-2 text-white font-bold">
          <span className="text-2xl">S</span>
        </div>
      </div>
      <div className="text-school-gray text-sm font-semibold mt-1">THE GLOBAL SCHOOL</div>
    </div>
  );
};

export default SchoolLogo;
