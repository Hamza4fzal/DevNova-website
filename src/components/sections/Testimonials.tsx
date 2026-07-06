import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle subtitle="Testimonials">Testimonials</SectionTitle>
        <div className="mt-12">
          {/* Content for Testimonials */}
          <div className="h-64 border border-secondary/10 rounded-3xl flex items-center justify-center text-secondary/30 bg-primary/20">
            Testimonials Content
          </div>
        </div>
      </Container>
    </section>
  );
};
