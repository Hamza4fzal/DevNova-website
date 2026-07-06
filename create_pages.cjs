const fs = require('fs');
const path = require('path');
const pagesDir = path.join('src', 'pages');
const pages = ['Home', 'About', 'Services', 'ERP', 'MobileApps', 'Websites', 'Dashboards', 'AIAutomation', 'Portfolio', 'CaseStudy', 'Careers', 'Blog', 'Contact', 'PrivacyPolicy', 'Terms', 'NotFound'];

pages.forEach(name => {
  const content = `import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const ${name}: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionTitle subtitle="Page">${name}</SectionTitle>
        <div className="mt-12 text-secondary/70">
          This is the ${name} page placeholder.
        </div>
      </Container>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(pagesDir, `${name}.tsx`), content);
});
