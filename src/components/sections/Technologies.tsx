import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export const Technologies: React.FC = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle subtitle="Technologies">Technologies</SectionTitle>
        <div className="mt-12">
          {/* Content for Technologies */}
          <div className="h-64 border border-secondary/10 rounded-3xl flex items-center justify-center text-secondary/30 bg-primary/20">
            Technologies Content
          </div>
        </div>
      </Container>
    </section>
  );
};
