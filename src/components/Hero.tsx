import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-block px-3 py-1 bg-cyan-950/60 border border-cyan-800 text-cyan-400 rounded-full text-xs font-semibold tracking-wide uppercase">
          Available for Opportunities
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="text-cyan-400">{portfolioData.name}</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-slate-300">
          {portfolioData.title}
        </p>
        <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a href="#projects" className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg shadow-lg hover:bg-cyan-400 transition">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 bg-slate-900 border border-slate-700 text-slate-200 font-bold rounded-lg hover:border-cyan-500 transition">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};