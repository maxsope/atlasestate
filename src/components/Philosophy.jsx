import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const titleRef = useRef(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          y: 0, opacity: 1, duration: 1, ease: 'power3.out'
        }
      );
      
      gsap.fromTo(leftRef.current, 
        { x: -50, opacity: 0 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 60%' },
          x: 0, opacity: 1, duration: 1, ease: 'power3.out'
        }
      );

      gsap.fromTo(rightRef.current, 
        { x: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 60%' },
          x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="py-32 px-6 md:px-12 relative overflow-hidden bg-obsidian">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-champagne/5 rounded-full blur-[60px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif italic text-champagne mb-4">
            {t('philTitle')}
          </h2>
          <p className="font-sans uppercase tracking-[0.2em] text-sm text-ivory/60 max-w-2xl mx-auto">
            {t('philSubtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Default Approach */}
          <div ref={leftRef} className="flex-1 rounded-[3rem] p-10 md:p-14 border border-red-500/10 bg-slate/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 font-mono text-9xl text-red-500">
              -
            </div>
            <div className="flex items-center gap-4 mb-10">
               <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500/80">
                  <X size={20} className="w-5 h-5" />
               </div>
               <h3 className="text-xl md:text-2xl font-sans uppercase tracking-widest text-ivory/80">
                  {t('philSelf')}
               </h3>
            </div>
            
            <div className="space-y-10">
              <div>
                <div className="font-mono text-5xl md:text-6xl text-red-500/30 mb-2">{t('philDays1')} <span className="text-2xl">{t('philDaysText1')}</span></div>
                <p className="font-sans text-xs tracking-widest text-ivory/50 uppercase">{t('philSub1')}</p>
              </div>
              <div className="w-full h-[1px] bg-red-500/10" />
              <ul className="space-y-5">
                 <li className="flex items-start gap-4">
                    <span className="text-red-500/50 mt-1">✕</span>
                    <span className="text-sm font-light text-ivory/60 leading-relaxed">{t('philSelfP1')}</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <span className="text-red-500/50 mt-1">✕</span>
                    <span className="text-sm font-light text-ivory/60 leading-relaxed">{t('philSelfP2')}</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <span className="text-red-500/50 mt-1">✕</span>
                    <span className="text-sm font-light text-ivory/60 leading-relaxed"><strong className="text-ivory/80 font-medium">{t('philSelfP3Target')}</strong>{t('philSelfP3Desc')}</span>
                 </li>
              </ul>
            </div>
          </div>

          {/* ATLAS Protocol */}
          <div ref={rightRef} className="flex-1 rounded-[3rem] p-10 md:p-14 border border-champagne/30 bg-champagne/5 relative overflow-hidden group hover:bg-champagne/10 transition-colors duration-500 shadow-none md:shadow-[0_0_50px_rgba(201,168,76,0.05)] hover:shadow-none md:hover:shadow-[0_0_80px_rgba(201,168,76,0.1)]">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 font-mono text-9xl text-champagne">
              +
            </div>
            
            <div className="flex items-center justify-between mb-10 relative z-10">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-champagne/20 border border-champagne/30 flex items-center justify-center text-champagne">
                     <Check size={20} className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sans uppercase tracking-widest text-champagne">
                     {t('philAtlas')}
                  </h3>
               </div>
            </div>
            
            <div className="space-y-10 relative z-10">
              <div>
                <div className="font-mono text-5xl md:text-6xl text-ivory mb-2">{t('philDays2')} <span className="text-2xl text-champagne">{t('philDaysText2')}</span></div>
                <p className="font-sans text-xs tracking-widest text-champagne/80 uppercase">{t('philSub2')}</p>
              </div>
              <div className="w-full h-[1px] bg-champagne/20" />
              <ul className="space-y-5">
                 <li className="flex items-start gap-4">
                    <span className="text-champagne mt-1">✓</span>
                    <span className="text-sm font-light text-ivory/80 leading-relaxed">{t('philAtlasP1')}</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <span className="text-champagne mt-1">✓</span>
                    <span className="text-sm font-light text-ivory/80 leading-relaxed">{t('philAtlasP2')}</span>
                 </li>
                 <li className="flex items-start gap-4">
                    <span className="text-champagne mt-1">✓</span>
                    <span className="text-sm font-light text-ivory/80 leading-relaxed"><strong className="text-ivory font-medium">{t('philAtlasP3Target')}</strong>{t('philAtlasP3Desc')}</span>
                 </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
