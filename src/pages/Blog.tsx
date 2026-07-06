import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionTitle subtitle="Page">Blog</SectionTitle>
        <div className="mt-12 text-secondary/70">
          This is the Blog page placeholder.
        </div>
      </Container>
    </div>
  );
};
