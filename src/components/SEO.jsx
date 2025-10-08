import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, url, image = "/logo.png", type = "website" }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Markyet",
          "url": "https://www.markyet.in",
          "logo": "https://www.markyet.in/logo.png",
          "founder": "Vasimalla Yashwanth",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guntur",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 7995673300",
            "email": "teammarkyet@gmail.com",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
