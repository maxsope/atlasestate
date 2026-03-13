import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Goal() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      tl.fromTo(lineRef.current, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut', transformOrigin: 'left center' }
      )
      .fromTo(textRef.current.children, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
        "-=0.5"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 relative bg-obsidian border-t border-ivory/5">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start">
        
        {/* Left Side: Title & Line */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-sans font-medium uppercase tracking-[0.1em] mb-4 text-ivory leading-tight">
            {t('goalTitle1')}
            <span className="font-serif italic text-champagne block">{t('goalTitle2')}</span>
          </h2>
          <div ref={lineRef} className="w-full h-[1px] bg-gradient-to-r from-champagne/50 to-transparent mt-8 hidden md:block"></div>
        </div>

        {/* Right Side: Content */}
        <div ref={textRef} className="w-full md:w-2/3">
          <h3 className="text-2xl md:text-3xl font-serif italic text-ivory/90 mb-8 leading-relaxed">
            "{t('goalSubtitle')}"
          </h3>
          <p className="font-sans text-lg text-ivory/60 font-light leading-relaxed mb-10">
            {t('goalDesc')}
          </p>
          <div className="inline-flex items-center gap-4 bg-slate/30 border border-ivory/10 px-6 py-3 rounded-full">
             <span className="w-2 h-2 rounded-full bg-champagne animate-pulse"></span>
             <span className="font-mono text-xs uppercase tracking-widest text-champagne/80">{t('goalHighlight')}</span>
          </div>
        </div>
      </div>

      {/* Background visual element */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-champagne/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none -translate-y-1/2 opacity-50" />
    </section>
  );
}
