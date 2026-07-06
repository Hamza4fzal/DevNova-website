import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle subtitle="WhyChooseUs">WhyChooseUs</SectionTitle>
        <div className="mt-12">
          {/* Content for WhyChooseUs */}
          <div className="h-64 border border-secondary/10 rounded-3xl flex items-center justify-center text-secondary/30 bg-primary/20">
            WhyChooseUs Content
          </div>
        </div>
      </Container>
    </section>
  );
};
