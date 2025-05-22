import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Play } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { collection, onSnapshot, orderBy, query, limit, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  mainImage: string;
  additionalImages: string[];
  youtubeLink?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
}

const NewsItem = ({ event, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  
  const defaultImage = "https://images.unsplash.com/photo-1564210350581-5a5f8b01f7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  
  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  // Create URL-friendly slug from title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleReadMore = () => {
    const slug = createSlug(event.title);
    navigate(`/news/${event.id}/${slug}`);
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 delay-${delay} transform hover:-translate-y-1 hover:shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={event.mainImage || defaultImage} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
        {event.youtubeLink && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="h-12 w-12 text-white" />
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-3.5 w-3.5 text-school-orange mr-1" />
            <span>{formatDate(event.date)}</span>
          </div>
          {event.createdBy && (
            <div className="flex items-center">
              <User className="h-3.5 w-3.5 text-school-blue mr-1" />
              <span>Admin</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-display font-bold mb-2 text-gray-800 line-clamp-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{truncateText(event.description)}</p>
        <div className="flex items-center justify-between">
          <Button 
            variant="link" 
            className="p-0 text-school-green hover:text-school-green-dark group"
            onClick={handleReadMore}
          >
            Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          {event.youtubeLink && (
            <Button 
              variant="outline" 
              size="sm"
              className="text-red-600 border-red-200 hover:bg-red-50"
              onClick={() => window.open(event.youtubeLink, '_blank')}
            >
              <Play className="h-3 w-3 mr-1" />
              Watch
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const fetchEvents = () => {
      try {
        const eventsQuery = query(
          collection(db, 'events'),
          orderBy('createdAt', 'desc'),
          limit(8)
        );

        const unsubscribe = onSnapshot(eventsQuery, (snapshot) => {
          const eventsList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Event[];
          
          setEvents(eventsList);
          setLoading(false);
        }, (error) => {
          console.error('Error fetching events:', error);
          toast.error('Failed to load events');
          setLoading(false);
        });

        return unsubscribe;
      } catch (error) {
        console.error('Error setting up events listener:', error);
        toast.error('Failed to setup events listener');
        setLoading(false);
      }
    };

    const unsubscribe = fetchEvents();
    
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const fetchUpcomingEvents = () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0];
        
        const upcomingQuery = query(
          collection(db, 'events'),
          where('date', '>=', currentDate),
          orderBy('date', 'asc'),
          limit(3)
        );

        const unsubscribe = onSnapshot(upcomingQuery, (snapshot) => {
          const eventsList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Event[];
          
          setUpcomingEvents(eventsList);
        }, (error) => {
          console.error('Error fetching upcoming events:', error);
        });

        return unsubscribe;
      } catch (error) {
        console.error('Error setting up upcoming events listener:', error);
      }
    };

    const unsubscribe = fetchUpcomingEvents();
    
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-school-blue"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

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
          {/* <p className={`text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Stay updated with the latest happenings, achievements, and upcoming events at Avenues.
          </p> */}
          
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map((event, index) => (
                <NewsItem 
                  key={event.id} 
                  event={event}
                  delay={(index + 1) * 100} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <Calendar className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Events Yet</h3>
                <p className="text-gray-500">Check back soon for upcoming events and news!</p>
              </div>
            </div>
          )}
          
          <div className={`mt-12 text-center transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button className="bg-school-orange hover:bg-school-red text-white transition-all duration-300 px-8">
              View All News & Events
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default News;