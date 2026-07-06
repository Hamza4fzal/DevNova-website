import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export const CTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="CTA">CTA</SectionTitle>
        <div className="mt-12">
          {/* Content for CTA */}
          <div className="h-64 border border-secondary/10 rounded-3xl flex items-center justify-center text-secondary/30 bg-primary/20">
            CTA Content
          </div>
        </div>
      </Container>
    </section>
  );
};
