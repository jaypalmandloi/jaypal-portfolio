import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const ProblemSolving: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30 px-6 border-t border-slate-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Problem-Solving Approach</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {portfolioData.problemSolvingSteps.map((step, idx) => (
            <div key={idx} className="flex items-center space-x-4 p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0">
                0{idx + 1}
              </div>
              <p className="text-sm text-slate-300 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};