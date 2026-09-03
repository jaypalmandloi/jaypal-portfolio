import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-tight text-cyan-400">
          <span className="text-white"></span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#expertise" className="hover:text-cyan-400 transition">Expertise</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#ai-eval" className="hover:text-cyan-400 transition">AI Evaluation</a>
          <a href="#contact" className="px-4 py-2 bg-cyan-500 text-slate-950 rounded-md font-semibold hover:bg-cyan-400 transition">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400">Skills</a>
          <a href="#expertise" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400">Expertise</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400">Projects</a>
          <a href="#ai-eval" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-cyan-400">AI Evaluation</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-cyan-400 font-semibold">Contact</a>
        </div>
      )}
    </nav>
  );
};