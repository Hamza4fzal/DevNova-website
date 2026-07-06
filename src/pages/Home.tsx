import React from 'react';
import { SEO } from '../components/seo/SEO';
import { Hero } from '../components/hero/Hero';
import { TrustedBy } from '../components/sections/TrustedBy';
import { WhatWeBuild } from '../components/sections/WhatWeBuild';
import { Industries } from '../components/sections/Industries';
import { Process } from '../components/sections/Process';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Technologies } from '../components/sections/Technologies';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

export const Home: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevNova',
    url: 'https://devnova.systems',
    logo: 'https://devnova.systems/favicon.svg',
    description: 'DevNova is a premium global software agency based in Pakistan, specializing in enterprise-grade ERP systems, mobile apps, web platforms, dashboards, and AI automation for ambitious businesses worldwide.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK'
    },
    sameAs: [
      'https://linkedin.com/company/devnova',
      'https://twitter.com/devnova'
    ]
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="DevNova | Premium Software Solutions" 
        description="DevNova is a premium global software agency based in Pakistan, specializing in enterprise-grade ERP systems, mobile apps, web platforms, dashboards, and AI automation for ambitious businesses worldwide." 
        jsonLd={organizationSchema} 
      />
      <Hero />
      <TrustedBy />
      <WhatWeBuild />
      <Industries />
      <Process />
      <FeaturedProjects />
      <WhyChooseUs />
      <Technologies />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
};
