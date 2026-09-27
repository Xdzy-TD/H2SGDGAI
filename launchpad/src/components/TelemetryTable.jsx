import React from 'react';

const telemetryData = [
  { id: 'LD-093', payload: 'CommSat Alpha', apogee: '35,786 km', status: 'NOMINAL', tMinus: 'T-04:22:15' },
  { id: 'EX-442', payload: 'Deep Space Probe', apogee: 'Translunar', status: 'PRE-FLIGHT', tMinus: 'T-12:45:00' },
  { id: 'OR-811', payload: 'Orbital Habitat Mod', apogee: '400 km', status: 'HOLD', tMinus: 'T-00:00:00' },
  { id: 'LD-102', payload: 'Weather Array', apogee: '850 km', status: 'NOMINAL', tMinus: 'T-48:10:00' },
];

const TelemetryTable = () => {
  return (
    <section id="telemetry" className="px-6 md:px-12 py-16">
      <div className="mb-8">
        <h3 className="font-heading font-bold text-3xl text-white mb-2">Live Telemetry</h3>
        <p className="font-body text-slate-400">Current orbital manifests and countdown sequences.</p>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-400/20">
                <th className="font-mono text-xs font-semibold text-slate-400 tracking-wider uppercase p-4">Mission ID</th>
                <th className="font-mono text-xs font-semibold text-slate-400 tracking-wider uppercase p-4">Payload</th>
                <th className="font-mono text-xs font-semibold text-slate-400 tracking-wider uppercase p-4">Apogee</th>
                <th className="font-mono text-xs font-semibold text-slate-400 tracking-wider uppercase p-4">Status</th>
                <th className="font-mono text-xs font-semibold text-slate-400 tracking-wider uppercase p-4">T-Minus</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              {telemetryData.map((row, idx) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-slate-400/10 transition-colors hover:bg-brand-primary/10 ${idx === telemetryData.length - 1 ? 'border-b-0' : ''}`}
                >
                  <td className="p-4 text-white font-medium">{row.id}</td>
                  <td className="p-4 text-slate-300">{row.payload}</td>
                  <td className="p-4 text-slate-300">{row.apogee}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      row.status === 'NOMINAL' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      row.status === 'HOLD' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-brand-primary/10 text-brand-accent border border-brand-primary/20'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-brand-tertiary">{row.tMinus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TelemetryTable;
