import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Terminal, Radio } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, 
        { y: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 text-ivory">
      <div className="mb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-sans font-medium uppercase tracking-[0.1em] mb-4">
          {t('featTitle1')}<span className="font-serif italic text-champagne">{t('featTitle2')}</span>
        </h2>
        <p className="text-ivory/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          {t('featSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Shuffler */}
        <div ref={el => cardsRef.current[0] = el} className="group bg-slate/20 border border-ivory/10 rounded-[2.5rem] p-8 hover:bg-slate/30 transition-colors duration-500 overflow-hidden relative flex flex-col justify-between h-[450px]">
          <div>
            <div className="w-14 h-14 rounded-full bg-obsidian border border-ivory/10 flex items-center justify-center mb-6 text-champagne">
              <Camera size={24} />
            </div>
            <h3 className="text-2xl font-serif italic mb-3">{t('featCard1Title')}</h3>
            <p className="text-sm font-sans tracking-wide text-ivory/70 leading-relaxed uppercase">
              {t('featCard1Desc')}
            </p>
          </div>
          
          <div className="relative w-full h-[200px] mt-8 rounded-[1.5rem] overflow-hidden border border-ivory/5 group-hover:border-champagne/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80')] bg-cover bg-center transition-all duration-1000 origin-left" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80')] bg-cover bg-center w-[0%] group-hover:w-[100%] transition-all duration-[1500ms] ease-in-out border-r border-champagne z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <span className="bg-obsidian/90 px-4 py-2 rounded-full text-xs font-mono text-champagne uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500">
                Staged
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Typewriter */}
        <div ref={el => cardsRef.current[1] = el} className="group bg-slate/20 border border-ivory/10 rounded-[2.5rem] p-8 hover:bg-slate/30 transition-colors duration-500 overflow-hidden relative flex flex-col justify-between h-[450px]">
          <div>
            <div className="w-14 h-14 rounded-full bg-obsidian border border-ivory/10 flex items-center justify-center mb-6 text-champagne">
              <Terminal size={24} />
            </div>
            <h3 className="text-2xl font-serif italic mb-3">{t('featCard2Title')}</h3>
            <p className="text-sm font-sans tracking-wide text-ivory/70 leading-relaxed uppercase">
              {t('featCard2Desc')}
            </p>
          </div>

          <div className="w-full h-[200px] mt-8 bg-obsidian rounded-[1.5rem] p-4 font-mono text-xs overflow-hidden border border-ivory/5 text-ivory/50 flex flex-col justify-end relative">
             <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-champagne/50 animate-pulse" />
             <div className="space-y-2 opacity-30 group-hover:opacity-100 transition-opacity duration-500 group-hover:translate-y-0 translate-y-4">
               <div>&gt; Target Audience: IT | Top Management</div>
               <div>&gt; Generating semantic core... [OK]</div>
               <div>&gt; Filtering low-quality leads...</div>
               <div className="text-champagne">&gt; High-Ticket Clients matched: 14</div>
               <div className="animate-[pulse_1s_infinite]">_</div>
             </div>
          </div>
        </div>

        {/* Card 3: Coverage */}
        <div ref={el => cardsRef.current[2] = el} className="group bg-slate/20 border border-ivory/10 rounded-[2.5rem] p-8 hover:bg-slate/30 transition-colors duration-500 overflow-hidden relative flex flex-col justify-between h-[450px]">
          <div>
            <div className="w-14 h-14 rounded-full bg-obsidian border border-ivory/10 flex items-center justify-center mb-6 text-champagne">
              <Radio size={24} />
            </div>
            <h3 className="text-2xl font-serif italic mb-3">{t('featCard3Title')}</h3>
            <p className="text-sm font-sans tracking-wide text-ivory/70 leading-relaxed uppercase">
              {t('featCard3Desc')}
            </p>
          </div>

          <div className="w-full h-[200px] mt-8 bg-obsidian rounded-[1.5rem] p-4 flex flex-col border border-ivory/5 items-center justify-center relative overflow-hidden group-hover:border-champagne/30 transition-colors duration-500 text-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
               <div className="absolute inset-0 border border-ivory/10 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000 ease-out"></div>
               <div className="absolute inset-3 border border-ivory/20 rounded-full group-hover:scale-125 group-hover:border-champagne/40 transition-all duration-700 delay-100 ease-out"></div>
               <div className="absolute inset-6 border border-ivory/30 rounded-full group-hover:scale-110 group-hover:border-champagne/80 transition-all duration-500 delay-200 ease-out bg-champagne/5"></div>
               <div className="absolute w-2 h-2 rounded-full bg-champagne group-hover:animate-ping duration-1000"></div>
               <div className="text-sm font-mono text-champagne/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-16 pb-4">REACH</div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-slate/80 rounded-full px-4 py-2 border border-ivory/10 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
               <span className="text-[10px] uppercase tracking-wider font-mono">{t('featReach')}</span>
               <span className="w-2 h-2 rounded-full bg-champagne animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 w-full text-center px-4">
        <p className="text-ivory/30 text-[10px] md:text-xs font-mono tracking-widest uppercase md:whitespace-nowrap overflow-hidden text-ellipsis">
          {t('featNote')}
        </p>
      </div>
    </section>
  );
}
