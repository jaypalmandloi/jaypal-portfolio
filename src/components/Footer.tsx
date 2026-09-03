import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
      <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
    </footer>
  );
};