import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const badgeRef = useRef(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
        .fromTo(leftRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }, "-=0.4")
        .fromTo(rightRef.current, { x: 50, opacity: 0, scale: 0.95 }, { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, "-=0.8");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-obsidian border-b border-ivory/5">
      
      {/* Background glow behind the photo */}
      <div className="absolute top-1/2 right-0 md:right-10 w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-champagne/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10 gap-16">
        
        {/* Left Content: Hook & Copy */}
        <div className="w-full md:w-[55%] flex flex-col items-start mt-10 md:mt-0">
          <div ref={badgeRef} className="flex items-center gap-3 bg-slate/30 border border-ivory/10 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-champagne block animate-pulse"></span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-ivory/80">{t('heroBadge')}</span>
          </div>
          
          <div ref={leftRef}>
            <h1 className="font-serif italic text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-ivory mb-8 whitespace-pre-wrap">
              {t('heroTitlePart1')}
              <span className="text-champagne not-italic font-sans font-medium uppercase tracking-tight">{t('heroTitlePart2')}</span>
            </h1>
            
            <p className="font-sans text-ivory/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <a href="#cta" className="magnetic-btn bg-champagne text-obsidian px-8 py-4 rounded-full font-sans uppercase tracking-[0.15em] font-medium text-sm transition-transform hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                {t('heroBtn')}
              </a>
              <div className="flex items-center gap-6 text-ivory/40">
                <div className="flex flex-col">
                  <span className="font-mono text-2xl text-ivory font-bold">100<span className="text-champagne">+</span></span>
                  <span className="text-[9px] uppercase tracking-widest mt-1">{t('heroStats1')}</span>
                </div>
                <div className="w-[1px] h-10 bg-ivory/10"></div>
                <div className="flex flex-col">
                  <span className="font-mono text-2xl text-ivory font-bold">4</span>
                  <span className="text-[9px] uppercase tracking-widest mt-1">{t('heroStats2')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Photo */}
        <div ref={rightRef} className="w-full md:w-[45%] relative mt-16 md:mt-0">
          <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-ivory/10 bg-slate relative group shadow-2xl shadow-obsidian">
            <img 
              src="./maxim-hero.jpg" 
              alt="Риелтор Максим - ATLAS" 
              className="w-full h-full object-cover object-top transition-all duration-700"
            />
            {/* Subtle overlay gradient at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent pointer-events-none opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
               <div>
                  <h3 className="font-serif italic text-3xl text-ivory">{t('heroName')}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-champagne mt-1">{t('heroRole')}</p>
               </div>
               <div className="w-12 h-12 rounded-full bg-obsidian/50 backdrop-blur-md border border-ivory/10 flex items-center justify-center text-champagne">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </div>
            </div>
          </div>
          
          {/* Decorative floating element */}
          <div className="absolute top-12 -right-4 md:-right-8 bg-slate/40 backdrop-blur-md border border-ivory/10 p-4 rounded-2xl animate-[float_6s_ease-in-out_infinite] z-20 shadow-xl">
            <div className="flex gap-1.5 items-center mb-1.5">
              {[1,2,3,4,5].map(i => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C9A84C"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
            </div>
            <p className="font-mono text-[9px] text-ivory/80 uppercase tracking-widest">{t('heroTag')}</p>
          </div>
        </div>

      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-12px) }
          100% { transform: translateY(0px) }
        }
      `}</style>
    </section>
  );
}
