import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { t } = useLanguage();
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });

      tl.fromTo(textRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' })
        .fromTo(btnRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }, "-=0.5");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={containerRef} className="py-32 px-6 bg-obsidian text-center rounded-t-[3rem] border-t border-ivory/10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 bg-slate/90 border border-ivory/10 px-5 py-2.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-champagne animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-ivory/80">{t('ctaStatus')}</span>
        </div>
      </div>

      <div ref={textRef} className="max-w-3xl mx-auto mt-16 mb-12 text-center">
        <h2 className="text-4xl md:text-7xl font-serif italic text-champagne mb-6">
          {t('ctaTitle')}
        </h2>
        <p className="text-ivory/60 font-sans text-lg tracking-wide uppercase max-w-xl mx-auto">
          {t('ctaDesc')}
        </p>
      </div>

      <div ref={btnRef} className="magnetic-btn">
        <a 
          href="https://t.me/max_sope" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center bg-champagne text-obsidian px-10 py-5 rounded-full font-sans uppercase tracking-[0.2em] font-medium text-sm overflow-hidden transition-all duration-300 md:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:shadow-none md:hover:shadow-[0_0_60px_rgba(201,168,76,0.5)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            {t('ctaBtn')} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} strokeWidth={2} />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
        </a>
      </div>
    </section>
  );
}
