const fs = require('fs');
const path = require('path');
const sectionsDir = path.join('src', 'components', 'sections');
const sections = ['TrustedBy', 'WhatWeBuild', 'Industries', 'Process', 'FeaturedProjects', 'WhyChooseUs', 'Technologies', 'Testimonials', 'FAQ', 'CTA'];

sections.forEach(name => {
  const content = `import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export const ${name}: React.FC = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle subtitle="${name}">${name}</SectionTitle>
        <div className="mt-12">
          {/* Content for ${name} */}
          <div className="h-64 border border-secondary/10 rounded-3xl flex items-center justify-center text-secondary/30 bg-primary/20">
            ${name} Content
          </div>
        </div>
      </Container>
    </section>
  );
};
`;
  fs.writeFileSync(path.join(sectionsDir, `${name}.tsx`), content);
});
