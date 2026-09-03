import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 px-6 border-t border-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Professional Profile</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
          <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
            <p>{portfolioData.about}</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
              Career Objective
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {portfolioData.careerObjective}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};