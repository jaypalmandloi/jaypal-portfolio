import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white">Selected Project Experience</h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6 hover:border-cyan-500/50 transition shadow-lg">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{project.description}</p>
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400">Key Contributions:</span>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                    {project.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-950 text-cyan-300 text-[10px] rounded border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};