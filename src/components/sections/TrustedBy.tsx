import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="TrustedBy">TrustedBy</SectionTitle>
        <div className="mt-12">
          {/* Content for TrustedBy */}
          <div className="h-64 border border-secondary/10 rounded-3xl flex items-center justify-center text-secondary/30 bg-primary/20">
            TrustedBy Content
          </div>
        </div>
      </Container>
    </section>
  );
};
