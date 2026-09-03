import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { AIEvaluation } from './components/AIEvaluation';
import { ProblemSolving } from './components/ProblemSolving';
import { TechStack } from './components/TechStack';
import { WhatIBring } from './components/WhatIBring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Projects />
      <AIEvaluation />
      <ProblemSolving />
      <TechStack />
      <WhatIBring />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;