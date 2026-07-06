import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export const Industries: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Industries">Industries</SectionTitle>
        <div className="mt-12">
          {/* Content for Industries */}
          <div className="h-64 border border-secondary/10 rounded-3xl flex items-center justify-center text-secondary/30 bg-primary/20">
            Industries Content
          </div>
        </div>
      </Container>
    </section>
  );
};
