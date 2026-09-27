import React from 'react';
import { Rocket, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="px-6 md:px-12 py-6 flex items-center justify-between z-50 relative">
      <div className="flex items-center gap-3">
        <Rocket className="text-brand-primary w-8 h-8" />
        <h1 className="font-heading font-bold text-2xl tracking-tighter text-white">
          LaunchPad
        </h1>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest text-slate-300">
        <a href="#missions" className="hover:text-brand-accent transition-colors">MISSIONS</a>
        <a href="#telemetry" className="hover:text-brand-accent transition-colors">TELEMETRY</a>
        <a href="#fleet" className="hover:text-brand-accent transition-colors">FLEET</a>
      </nav>
      
      <div className="hidden md:flex items-center gap-4">
        <button className="btn-secondary">Operator Login</button>
        <button className="btn-primary">Command Center</button>
      </div>

      <button className="md:hidden text-slate-300 hover:text-white">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;
