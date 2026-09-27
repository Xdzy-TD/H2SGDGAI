import React from 'react';
import { Clock, ShieldCheck, MapPin } from 'lucide-react';

const LaunchManifest = () => {
  return (
    <section id="missions" className="px-6 md:px-12 py-16">
      <div className="mb-12 text-center">
        <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Flight Manifests</h3>
        <p className="font-body text-slate-400 max-w-2xl mx-auto">
          Upcoming orbital insertions and payload configurations for Q4 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="glass-panel p-6 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <span className="badge">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                T-48:00:00
              </span>
              <span className="font-mono text-slate-400 text-sm">ORB-{104 + item}</span>
            </div>
            
            <div>
              <h4 className="font-heading font-bold text-xl text-white mb-2">Asteria Payload Integrator</h4>
              <p className="font-body text-sm text-slate-400">Class IV orbital satellite deployment for deep-space telemetry network.</p>
            </div>
            
            <div className="flex flex-col gap-3 font-mono text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-tertiary" />
                <span>Launch Window: 04:00Z</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-tertiary" />
                <span>Pad 39A, LC-39</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Payload Secured</span>
              </div>
            </div>
            
            <button className="btn-secondary mt-auto">View Trajectory</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LaunchManifest;
