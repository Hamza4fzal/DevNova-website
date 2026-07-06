import React from 'react';
import { Logo } from '../../assets/logo/Logo';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-secondary pt-32 pb-12 border-t border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6 text-4xl" />
            <p className="text-secondary/60 max-w-sm text-lg">
              Building premium enterprise software for the modern web.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="flex flex-col gap-4">
              {['ERP Systems', 'Mobile Apps', 'Web Applications', 'AI Automation'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-secondary/70 hover:text-secondary flex items-center gap-2 group transition-colors">
                    {item}
                    <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-secondary/70 hover:text-secondary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-secondary/10 text-sm text-secondary/50">
          <p>© {new Date().getFullYear()} DevNova. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
