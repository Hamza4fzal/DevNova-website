import React from 'react';
import { ComingSoon } from '../components/ui/ComingSoon';

export const Blog: React.FC = () => {
  return (
    <ComingSoon 
      title="Our Blog"
      seoDescription="Insights, tutorials, and thought leadership from the DevNova engineering team."
      seoCanonical="https://devnova.systems/blog"
    />
  );
};
