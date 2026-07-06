import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  jsonLd?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'DevNova | Premium Software Solutions',
  description = 'DevNova is a premium global software agency based in Pakistan, specializing in enterprise-grade ERP systems, mobile apps, web platforms, dashboards, and AI automation for ambitious businesses worldwide.',
  canonical = 'https://devnova.systems',
  type = 'website',
  image = 'https://devnova.systems/og-image.jpg',
  jsonLd,
}) => {
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="DevNova" />

      {/* Twitter */}
      <meta name="twitter:creator" content="@DevNova" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema for LLMs (ChatGPT, Gemini) and Search Engines */}
      {jsonLd && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
        />
      )}
    </Helmet>
  );
};
