
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: "Annual Sports Day Celebration",
      date: "May 15, 2025",
      image: "bg-gray-300",
      excerpt: "Join us for a day filled with athletic competitions, team spirit, and celebration of physical fitness.",
      color: "bg-school-red"
    },
    {
      title: "Science Fair Projects Showcase",
      date: "May 28, 2025",
      image: "bg-gray-300",
      excerpt: "Students will present their innovative science projects exploring solutions to real-world problems.",
      color: "bg-school-green"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Explore <span className="text-school-orange">Blogs</span> And News
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className={`${item.color} h-2`}></div>
              <div className="h-48 bg-gray-300"></div>
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button variant="outline" size="sm" className="text-school-blue border-school-blue hover:bg-school-blue hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-school-orange text-school-orange hover:bg-school-orange hover:text-white">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
