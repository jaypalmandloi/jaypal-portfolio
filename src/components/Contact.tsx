import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 px-6 border-t border-slate-900 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white">Let's Build Something Great Together</h2>
        <p className="text-slate-400 text-sm">
          Interested in collaborating or hiring {portfolioData.name} for full-stack engineering, cloud architecture, or AI evaluation workflows? Get in touch.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <a href="mailto:contact@jaypalsinghmandloi.dev" className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition">
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/jaypal-mandloi-14894522/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-slate-500 transition">
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};