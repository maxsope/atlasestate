import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const { t, lang, toggleLang } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'bg-obsidian/80 backdrop-blur-md shadow-2xl shadow-obsidian/50', targets: navRef.current },
        onUpdate: (self) => {
          const isMobile = window.innerWidth < 768;
          if (self.progress > 0 && navRef.current) {
            gsap.to(navRef.current, { padding: isMobile ? '0.5rem 1rem' : '0.75rem 2rem', borderRadius: '3rem', width: isMobile ? '95%' : '90%', top: isMobile ? '0.5rem' : '1rem', duration: 0.3, ease: 'power3.out', overwrite: 'auto' });
          } else if (navRef.current) {
            gsap.to(navRef.current, { padding: isMobile ? '1rem 1rem' : '1.5rem 3rem', borderRadius: '0', width: '100%', top: '0', duration: 0.3, ease: 'power3.out', overwrite: 'auto' });
          }
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none">
      <nav ref={navRef} className="w-full flex items-center justify-between px-4 md:px-12 py-4 md:py-6 pointer-events-auto transition-colors duration-500 ease-in-out border border-transparent/10">
        <a href="/" className="flex items-center shrink-0">
          <img src="/atlas-logo.png" alt="ATLAS" className="h-6 sm:h-8 md:h-10 object-contain hover:opacity-80 transition-opacity" />
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#features" className="hover:text-champagne transition-colors">{t('navMethod')}</a>
          <a href="#services" className="hover:text-champagne transition-colors">{t('navServices')}</a>
          <a href="#philosophy" className="hover:text-champagne transition-colors">{t('navManifest')}</a>
          <a href="#protocol" className="hover:text-champagne transition-colors">{t('navProtocol')}</a>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex gap-2 text-[10px] md:text-xs font-mono uppercase tracking-widest shrink-0">
            <button 
              onClick={() => toggleLang('ua')} 
              className={`transition-colors ${lang === 'ua' ? 'text-champagne' : 'text-ivory/50 hover:text-ivory'}`}>
              UA
            </button>
            <span className="text-ivory/20">|</span>
            <button 
              onClick={() => toggleLang('ru')} 
              className={`transition-colors ${lang === 'ru' ? 'text-champagne' : 'text-ivory/50 hover:text-ivory'}`}>
              RU
            </button>
          </div>
          <a href="#cta" className="magnetic-btn bg-ivory text-obsidian px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-sm font-semibold uppercase tracking-wider hover:bg-champagne hover:text-white transition-colors shrink-0 whitespace-nowrap">
            {t('navContact')}
          </a>
        </div>
      </nav>
    </div>
  );
}
