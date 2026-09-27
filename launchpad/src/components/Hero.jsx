import React from 'react';
import { ChevronRight, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative px-6 md:px-12 py-20 lg:py-32 overflow-hidden flex flex-col items-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="badge mb-8">
        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
        SYSTEM NOMINAL
      </div>
      
      <h2 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight mb-6 tracking-tight text-white max-w-4xl">
        Next-Generation Orbital Logistics
      </h2>
      
      <p className="font-body text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
        Mission-critical dependability paired with deep-space execution. Orchestrate payloads, analyze telemetry, and coordinate fleet operations from a single authoritative terminal.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button className="btn-primary flex items-center gap-2 text-lg px-8 py-4">
          Initialize Sequence
          <ChevronRight className="w-5 h-5" />
        </button>
        <button className="btn-secondary flex items-center gap-2 text-lg px-8 py-4">
          <Activity className="w-5 h-5" />
          Live Telemetry
        </button>
      </div>
    </section>
  );
};

export default Hero;
