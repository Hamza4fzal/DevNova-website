import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const Careers: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionTitle subtitle="Page">Careers</SectionTitle>
        <div className="mt-12 text-secondary/70">
          This is the Careers page placeholder.
        </div>
      </Container>
    </div>
  );
};
