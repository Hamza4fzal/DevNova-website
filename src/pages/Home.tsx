import React from 'react';
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
  return (
    <div className="flex flex-col">
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
