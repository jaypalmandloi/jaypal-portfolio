import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const AIEvaluation: React.FC = () => {
  return (
    <section id="ai-eval" className="py-24 bg-slate-950 px-6 border-t border-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">AI & Model Evaluation</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Applying practical software engineering expertise to validate and optimize AI-generated code and technical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {portfolioData.aiEvaluation.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-900/60 border border-slate-800 rounded-lg flex items-start space-x-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};