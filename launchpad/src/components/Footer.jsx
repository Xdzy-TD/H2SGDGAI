import React from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-400/10 mt-20 px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Rocket className="text-brand-primary w-6 h-6" />
          <span className="font-heading font-bold text-xl text-white">
            LaunchPad
          </span>
        </div>
        
        <div className="flex gap-6 font-mono text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">API Specs</a>
          <a href="#" className="hover:text-white transition-colors">System Status</a>
          <a href="#" className="hover:text-white transition-colors">Security Clearance</a>
        </div>
        
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} Orbital Infrastructure. All Systems Nominal.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
