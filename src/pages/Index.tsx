import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import NewsSection from '@/components/NewsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import SocialMediaIcons from '@/components/SocialMediaIcons';
import NoticeBoard from '@/components/NoticeBoard';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';



const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Start loading animation immediately
    setLoading(true);
    
    // Preload critical assets
    const preloadAssets = async () => {
      try {
        // Preload banner image
        const bannerImg = new Image();
        bannerImg.src = '/banner/banner1.jpeg';
        await bannerImg.decode();
        
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        // If preloading fails, still hide loading after delay
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    preloadAssets();
  }, []);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Avenues The Global School - Nurturing Tomorrow's Leaders</title>
        <meta
          name="description"
          content="Avenues provides quality education that nurtures young minds to reach their full potential in a supportive and innovative environment."
        />
        <meta
          name="keywords"
          content="Avenues, global school, education, learning, children education, school admission, best school"
        />
        <link rel="canonical" href="https://smartavenues.edu/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartavenues.edu/" />
        <meta property="og:title" content="Avenues The Global School" />
        <meta
          property="og:description"
          content="Nurturing Tomorrow's Leaders through quality education and holistic development"
        />
        <meta property="og:image" content="https://smartavenues.edu/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://smartavenues.edu/" />
        <meta name="twitter:title" content="Avenues The Global School" />
        <meta
          name="twitter:description"
          content="Nurturing Tomorrow's Leaders through quality education and holistic development"
        />
        <meta name="twitter:image" content="https://smartavenues.edu/twitter-image.jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Avenues The Global School",
              "url": "https://smartavenues.edu",
              "logo": "https://smartavenues.edu/logo.png",
              "sameAs": [
                "https://www.facebook.com/smartavenues",
                "https://www.instagram.com/smartavenues",
                "https://twitter.com/smartavenues"
              ],
              "description": "Avenues provides quality education that nurtures young minds to reach their full potential in a supportive and innovative environment.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Education Street",
                "addressLocality": "Knowledge City",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-123-456-7890",
                "contactType": "admissions"
              }
            }
          `}
        </script>
      </Helmet>

      {loading && <LoadingAnimation isLoading={loading} />}

      {/* Full-screen Video Banner Overlay */}
      {!loading && showBanner && (
  <div
    className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4"
    onClick={() => setShowBanner(false)}
  >
    <div
      className="relative w-full max-w-4xl mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full p-2"
        onClick={() => setShowBanner(false)}
        aria-label="Close Video"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full rounded-lg overflow-hidden shadow-2xl aspect-video">
        {!showVideo ? (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={handleThumbnailClick}
          >
            <img
              src="banner/banner1.jpeg" // your thumbnail image
              alt="School Video Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-purple-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dw6owilcs&public_id=english_cdihev&autoplay=true"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            className="w-full h-full rounded-lg"
          />
        )}
      </div>
    </div>
  </div>
)}


      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <NoticeBoard />
          <HeroSection />
          <WhyChooseUs />
          <NewsSection />
          <Faculty />
          <CallToAction />
          <Testimonials />
          <Footer />
          <SocialMediaIcons />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
