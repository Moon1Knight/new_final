
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
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for all resources to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Avenues Global School - Nurturing Tomorrow's Leaders</title>
        <meta name="description" content="Avenues provides quality education that nurtures young minds to reach their full potential in a supportive and innovative environment." />
        <meta name="keywords" content="Avenues, global school, education, learning, children education, school admission, best school" />
        <link rel="canonical" href="https://smartavenues.edu/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartavenues.edu/" />
        <meta property="og:title" content="Avenues Global School" />
        <meta property="og:description" content="Nurturing Tomorrow's Leaders through quality education and holistic development" />
        <meta property="og:image" content="https://smartavenues.edu/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://smartavenues.edu/" />
        <meta name="twitter:title" content="Avenues Global School" />
        <meta name="twitter:description" content="Nurturing Tomorrow's Leaders through quality education and holistic development" />
        <meta name="twitter:image" content="https://smartavenues.edu/twitter-image.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Avenues Global School",
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
      
      <LoadingAnimation isLoading={loading} />
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />
          <HeroSection />
          <WhyChooseUs />
          <NewsSection />
          <Faculty />
          
          <CallToAction />
          
          <Testimonials />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
