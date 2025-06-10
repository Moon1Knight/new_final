import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FacultyMember {
  name: string;
  imageUrl: string;
}

const facultyMembers: FacultyMember[] = [
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
  { name: "V. SIRISHA", imageUrl: "/Faculty/Staff/V.SIRISHA-M.A-T.P.T.jpeg" },
];

const FacultyPage = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-purple-600">Faculty</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {facultyMembers.map((member, index) => (
            <Card key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-white transform transition-transform duration-300 hover:scale-105">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-200 mb-4 flex-shrink-0">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardContent className="text-center p-0">
                <h2 className="text-sm sm:text-base font-semibold text-gray-700 leading-tight">
                  {member.name}
                </h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyPage;