import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesMatrix from './components/ServicesMatrix';
import Philosophy from './components/Philosophy';
import ROI from './components/ROI';
import Protocol from './components/Protocol';
import Goal from './components/Goal';
import CTA from './components/CTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // General animations can go here, but component specific animations 
      // are better in their respective components.
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-obsidian min-h-screen text-ivory font-sans antialiased overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ServicesMatrix />
        <Philosophy />
        <ROI />
        <Protocol />
        <Goal />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
