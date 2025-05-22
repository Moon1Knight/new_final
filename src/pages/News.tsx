
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NewsItem = ({ title, excerpt, image, date, author, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 delay-${delay} transform hover:-translate-y-1 hover:shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-3.5 w-3.5 text-school-orange mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 text-school-blue mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-display font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Button variant="link" className="p-0 text-school-green hover:text-school-green-dark group">
          Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const News = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const newsItems = [
    {
      title: "Annual Science Fair Winners Announced",
      excerpt: "Congratulations to all participants in this year's science fair. The creativity and innovation displayed were truly impressive.",
      image: "https://images.unsplash.com/photo-1564210350581-5a5f8b01f7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2025",
      author: "Principal Johnson"
    },
    {
      title: "New Sports Complex Opening Next Month",
      excerpt: "We're excited to announce that our state-of-the-art sports complex will be ready for use starting next month.",
      image: "https://images.unsplash.com/photo-1551767308-1c936c2930e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 10, 2025",
      author: "Sports Department"
    },
    {
      title: "Students Win National Debate Championship",
      excerpt: "Our debate team has brought home the national trophy after an outstanding performance at the finals held last weekend.",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f669?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May 3, 2025",
      author: "Ms. Winters"
    },
    {
      title: "Summer Camp Registration Now Open",
      excerpt: "Secure your child's spot in our popular summer camp program. Limited spaces available for this engaging and educational experience.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 28, 2025",
      author: "Activities Coordinator"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>News & Events - Avenues Global School</title>
        <meta name="description" content="Stay updated with the latest news, events, and activities at Avenues Global School." />
        <meta name="keywords" content="school news, school events, education updates, student achievements" />
      </Helmet>
      <Navigation />
      
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className={`text-5xl font-display font-bold text-center mb-4 text-school-blue-dark transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            News & Events
          </h1>
          <p className={`text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Stay updated with the latest happenings, achievements, and upcoming events at Avenues.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <NewsItem key={index} {...item} delay={(index + 1) * 100} />
            ))}
          </div>
          
          <div className={`mt-12 text-center transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button className="bg-school-orange hover:bg-school-red text-white transition-all duration-300 px-8">
              View All News & Events
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-school-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Upcoming Events</h2>
              <p className="mb-6">Mark your calendars for these important upcoming events at Avenues.</p>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="bg-white text-school-blue-dark rounded-lg p-3 text-center h-16 w-16 flex flex-col justify-center mr-4">
                    <span className="text-lg font-bold">15</span>
                    <span className="text-xs">MAY</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Parent-Teacher Conference</h3>
                    <p className="text-sm opacity-80">5:00 PM - School Auditorium</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-white text-school-blue-dark rounded-lg p-3 text-center h-16 w-16 flex flex-col justify-center mr-4">
                    <span className="text-lg font-bold">22</span>
                    <span className="text-xs">MAY</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Annual Sports Day</h3>
                    <p className="text-sm opacity-80">9:00 AM - Sports Ground</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-white text-school-blue-dark rounded-lg p-3 text-center h-16 w-16 flex flex-col justify-center mr-4">
                    <span className="text-lg font-bold">30</span>
                    <span className="text-xs">MAY</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Art Exhibition</h3>
                    <p className="text-sm opacity-80">10:00 AM - Art Gallery</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-3xl font-display font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="mb-6">Stay updated with all the latest news and events from Avenues.</p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <Button className="w-full bg-white text-school-blue-dark hover:bg-school-orange hover:text-white transition-colors duration-300">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;
