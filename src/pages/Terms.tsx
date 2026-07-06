import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionTitle subtitle="Page">Terms</SectionTitle>
        <div className="mt-12 text-secondary/70">
          This is the Terms page placeholder.
        </div>
      </Container>
    </div>
  );
};
