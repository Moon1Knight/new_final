import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const Faculty = () => {
  const navigate = useNavigate();
  // const handleRedirect = () => {
  //   navigate("/news#");
  // };
  
  const teachers = [
    {
      name: "Dr. Srinivas Cherukuri",
      position: "Director",
      color: "bg-red-500",
      gradient: "from-red-400 to-red-600",
      imageUrl: "Faculty/Dr.Srinivas_Cherukuri.jpeg",
      messageId: "srinivas-message"
    },
    {
      name: "Bala Chandra M",
      position: "Director",
      color: "bg-orange-500",
      gradient: "from-orange-400 to-orange-600",
      imageUrl: "/Faculty/bala-chandra-m.jpeg",
      messageId: "bala-message"
    },
    {
      name: "Mrs. Latha Devaguptapu",
      position: "Academic Director",
      color: "bg-green-500",
      gradient: "from-green-400 to-green-600",
      imageUrl: "Faculty/Mrs.Latha_Devaguptapu.jpeg",
      messageId: "latha-message"
    }
  ];

  const handleRedirect = (messageId: string) => {
    navigate(`/about#${messageId}`);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Management</span> 
        </h2>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl">
            {teachers.map((teacher, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 rounded-2xl cursor-pointer"
                onClick={() => handleRedirect(teacher.messageId)}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${teacher.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="relative bg-white m-1 rounded-xl overflow-hidden">
                  
                  {/* Profile Image Area with Gradient Overlay */}
                  <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    {/* Decorative circles */}
                    <div className={`absolute -top-4 -right-4 w-16 h-16 ${teacher.color} opacity-20 rounded-full`}></div>
                    <div className={`absolute -bottom-6 -left-6 w-20 h-20 ${teacher.color} opacity-10 rounded-full`}></div>
                    
                    {/* Display image if imageUrl exists, otherwise show initials */}
                    {teacher.imageUrl ? (
                      <img
                        src={teacher.imageUrl}
                        alt={`${teacher.name}'s photo`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      // Placeholder for actual image (kept as fallback)
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 ${teacher.color} rounded-full opacity-30 flex items-center justify-center`}>
                          <span className="text-white text-2xl font-bold">
                            {teacher.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${teacher.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 text-center relative">
                    {/* Color accent line */}
                    <div className={`w-12 h-1 ${teacher.color} mx-auto mb-4 rounded-full group-hover:w-16 transition-all duration-300`}></div>
                    
                    <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">
                      {teacher.name}
                    </h3>
                    <p className={`text-sm font-medium ${teacher.color.replace('bg-', 'text-')} mb-3`}>
                      {teacher.position}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Additional decorative elements */}
        {/* <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Faculty;