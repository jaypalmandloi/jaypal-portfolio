import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-slate-950 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Technical Expertise</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.technicalExpertise.map((exp, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-slate-700 transition">
              <h3 className="text-xl font-bold text-cyan-400">{exp.category}</h3>
              <p className="text-sm text-slate-400">{exp.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.items.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-xs rounded border border-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-900/60 border border-cyan-900/40 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white">Full-Stack Architecture Pattern</h3>
          <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-cyan-400 font-mono text-xs md:text-sm text-center overflow-x-auto">
            {portfolioData.architectureFlow.pipeline}
          </div>
          <p className="text-sm text-slate-300">{portfolioData.architectureFlow.deployment}</p>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Focus Areas</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {portfolioData.architectureFlow.focusAreas.map((fa, index) => (
                <div key={index} className="p-2 bg-slate-950/60 rounded border border-slate-800 text-xs text-slate-300 text-center">
                  {fa}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};