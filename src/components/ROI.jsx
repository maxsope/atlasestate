import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function ROI() {
  const containerRef = useRef(null);
  const mathRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const barRef = useRef(null);
  const numsRef = useRef([]);
  const barRefs = useRef([]);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // 1. Появление всего дашборда
      tl.fromTo(mathRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
      );

      // 2. Появление убыточного сценария слева
      tl.fromTo(leftColRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        "-=0.5"
      );

      // 3. Появление профитного сценария справа
      tl.fromTo(rightColRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        "-=0.4"
      );

      // 4. Заливка шкалы прибыли (ROI Gap) с небольшой задержкой
      tl.fromTo(barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut' },
        "-=0.2"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="roi" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#0a0a0e] relative z-10 border-t border-b border-ivory/5">
      <div className="max-w-5xl mx-auto relative z-10">
         <div className="mb-24 text-center">
           <h2 className="text-4xl md:text-6xl font-serif italic text-champagne mb-4">
             {t('roiTitle1')}<span className="font-sans font-medium not-italic uppercase tracking-[0.1em] text-ivory text-3xl md:text-5xl block mt-2">{t('roiTitle2')}</span>
           </h2>
         </div>

        <div ref={mathRef} className="bg-obsidian border border-ivory/10 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none opacity-5">
             <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #FAF8F5 1px, transparent 1px), linear-gradient(to bottom, #FAF8F5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="relative z-10">
            <div className="mb-12 border-b border-ivory/10 pb-6 flex flex-col md:flex-row justify-between md:items-end gap-6">
               <div>
                  <h3 className="text-xl md:text-3xl font-sans font-medium text-ivory tracking-wide">
                     {t('roiScrambleText')}
                  </h3>
                  <p className="text-sm text-ivory/50 mt-2 font-light">{t('roiContext')}</p>
               </div>
               <div className="font-mono text-xs text-champagne uppercase tracking-widest bg-champagne/10 px-4 py-2 rounded-lg border border-champagne/20">
                  Real Estate P&L Statement
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
               {/* Bad Math */}
               <div ref={leftColRef} className="space-y-6">
                  <div className="mb-8 border-b border-ivory/10 pb-4">
                     <p className="font-sans text-xs uppercase tracking-widest text-red-500 font-medium">{t('roiSelfTitle')}</p>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex justify-between items-center">
                        <span className="text-sm text-ivory/60 font-light">{t('roiSelf1')}</span>
                        <span className="font-mono text-red-500/80">-$1,000</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm text-ivory/60 font-light">{t('roiSelf2')} <span className="text-ivory/30 text-xs">{t('roiSelf2Extra')}</span></span>
                        <span className="font-mono text-red-500/80">-$1,200</span>
                     </div>
                  </div>

                  <div className="mt-10 flex justify-between items-end">
                     <span className="text-xs uppercase tracking-widest text-red-500 font-medium">{t('roiSelfTotal')}</span>
                     <div className="text-right">
                        <span className="block text-2xl md:text-4xl font-mono text-red-500" ref={el => numsRef.current[0] = el} data-val="-2200">-$2,200</span>
                     </div>
                  </div>
               </div>

               {/* Good Math (ATLAS) */}
               <div ref={rightColRef} className="space-y-6 md:border-l md:border-ivory/5 md:pl-20 relative">
                  <div className="mb-8 border-b border-champagne/20 pb-4 flex justify-between items-center">
                     <p className="font-sans text-xs uppercase tracking-widest text-champagne">{t('roiAtlasTitle')}</p>
                  </div>
                  
                  <div className="space-y-6 relative z-10">
                     <div className="flex justify-between items-center">
                        <span className="text-sm text-ivory/80 font-light">{t('roiAtlas1')} <span className="text-champagne/50 text-xs">{t('roiAtlas1Extra')}</span></span>
                        <span className="font-mono text-champagne">+$500</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-sm text-ivory/80 font-light">{t('roiAtlas2')}</span>
                        <span className="font-mono text-champagne">+$1,200</span>
                     </div>
                  </div>

                  <div className="mt-10 flex justify-between items-end relative z-10">
                     <span className="text-xs uppercase tracking-widest text-champagne/50">{t('roiAtlasTotal')}</span>
                     <div className="text-right">
                        <span className="block text-2xl md:text-4xl font-mono text-champagne" ref={el => numsRef.current[2] = el} data-val="1700">+$1,700</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-14 pt-10 border-t border-ivory/10 text-center">
               <p className="font-sans text-xs uppercase tracking-widest text-ivory/40 mb-6 font-medium">{t('roiGapTitle')}</p>
               <div className="w-full h-2 bg-slate rounded-full overflow-hidden flex">
                  <div className="w-[35%] bg-red-500/40 h-full border-r border-obsidian" title={t('roiGapLossTitle')}></div>
                  <div ref={barRef} className="bg-gradient-to-r from-green-500/40 to-champagne h-full origin-left flex-1" style={{transform: 'scaleX(0)'}} title={t('roiGapAddTitle')}></div>
               </div>
               <div className="flex justify-between w-full mt-4 text-[10px] font-mono uppercase text-ivory/30">
                  <div className="w-[35%] text-left">{t('roiGapLoss')}</div>
                  <div className="flex-1 text-right text-champagne">{t('roiGapAdd')}</div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
