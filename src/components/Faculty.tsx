
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Faculty = () => {
  const teachers = [
    {
      name: "Sarah Johnson",
      position: "Primary Coordinator",
      color: "bg-school-red"
    },
    {
      name: "Michael Chen",
      position: "Science Faculty",
      color: "bg-school-orange"
    },
    {
      name: "Priya Singh",
      position: "Arts Director",
      color: "bg-school-green"
    },
    {
      name: "David Wilson",
      position: "Sports Coach",
      color: "bg-school-blue"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Our <span className="text-school-orange">Expert</span> Instructors
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className={`${teacher.color} h-2`}></div>
              <div className="bg-gray-300 h-36 md:h-48"></div>
              <CardContent className="p-4 text-center">
                <h3 className="font-display font-semibold text-lg">{teacher.name}</h3>
                <p className="text-gray-600 text-sm">{teacher.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
