import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ERP } from './pages/ERP';
import { MobileApps } from './pages/MobileApps';
import { Websites } from './pages/Websites';
import { Dashboards } from './pages/Dashboards';
import { AIAutomation } from './pages/AIAutomation';
import { Portfolio } from './pages/Portfolio';
import { CaseStudy } from './pages/CaseStudy';
import { Careers } from './pages/Careers';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/erp', element: <ERP /> },
      { path: 'services/mobile-apps', element: <MobileApps /> },
      { path: 'services/websites', element: <Websites /> },
      { path: 'services/dashboards', element: <Dashboards /> },
      { path: 'services/ai-automation', element: <AIAutomation /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'portfolio/:id', element: <CaseStudy /> },
      { path: 'careers', element: <Careers /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
