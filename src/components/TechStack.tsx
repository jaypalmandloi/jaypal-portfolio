import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Technology Stack Summary</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(portfolioData.techStackSummary).map(([category, items], idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
              <h3 className="text-base font-bold text-cyan-400 border-b border-slate-800 pb-2">{category}</h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};