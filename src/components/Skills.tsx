import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30 px-6 border-t border-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Core Skills</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {portfolioData.coreSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 rounded-lg text-sm font-medium transition cursor-default shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};