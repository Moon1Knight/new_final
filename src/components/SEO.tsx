import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;                // If empty, default title will be used
  description?: string;          // If empty, default description will be used
  keywords?: string;             // If empty, default keywords will be used
  ogImage?: string;              // Full URL to OG image, default included
  ogType?: string;               // Default: website
  canonicalUrl?: string;         // Default: '/'
  jsonLd?: object | null;        // Optionally pass custom structured data, otherwise default is used
}

const defaultKeywords = [
  "best ICSE school Rajahmundry",
  "top schools in Andhra Pradesh",
  "international school Rajahmundry",
  "boarding school Rajahmundry",
  "convent school Rajahmundry",
  "day boarding schools Andhra Pradesh",
  "co-ed schools in Rajahmundry",
  "kindergarten to higher secondary school",
  "English medium schools Rajahmundry",
  "ICSE curriculum schools",
  "best schools near me",
  "international schools in Andhra Pradesh",
].join(", ");

const defaultJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "Avenues The Global School",
  "url": "https://avenuesglobalschool.in",
  "description": "Avenues The Global School is the leading ICSE school in Rajahmundry, Andhra Pradesh, offering Kindergarten to Higher Secondary education with Boarding, Day Boarding, and International curricula.",
  "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tammana Complex, Seelam Nookaraju Jn, near KIMS Bollineni Hospital, Katari Gardens, Gandhipuram, ",
        "addressLocality": "Rajahmundry",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "533101",
        "addressCountry": "IN"
      },
      "telephone": "+91 7997043355 , +91 7997043366",
  "email": "info@avenuesglobalschool.in",
  "curriculum": "ICSE"
};

const SEO: React.FC<SEOProps> = ({
  title = "Best ICSE School in Rajahmundry - Avenues Global School",
  description = "Avenues The Global School is the No.1 ICSE school in Rajahmundry and Andhra Pradesh offering Kindergarten to Higher Secondary education. A top International & Convent school with Day Boarding and Boarding options. Experience world-class English medium education and co-ed environment.",
  keywords = defaultKeywords,
  ogImage = "https://avenuesglobalschool.in/images/og-image.jpg",
  ogType = "website",
  canonicalUrl = "/",
  jsonLd = defaultJsonLd,
}) => {
  const siteUrl = "https://avenuesglobalschool.in";
  const fullTitle = `${title} | Avenues The Global School`;
  const canonicalFullUrl = canonicalUrl.startsWith("http") ? canonicalUrl : `${siteUrl}${canonicalUrl}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Avenues The Global School" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalFullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalFullUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@smartavenues" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Viewport and charset */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Structured Data: JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
