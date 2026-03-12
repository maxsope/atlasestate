import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Pinning the cards as they scroll into view
      itemsRef.current.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top top+=${100 + i * 20}`, // Offset to see the previous card's top edge
          endTrigger: containerRef.current,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });

        // Fade out previous cards slightly
        if (i !== itemsRef.current.length - 1) {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: itemsRef.current[i + 1],
              start: "top center",
              end: "top top",
              scrub: true,
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      title: t('prot1Title'),
      subtitle: t('prot1Sub'),
      desc: t('prot1Desc'),
      img: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80'
    },
    {
      title: t('prot2Title'),
      subtitle: t('prot2Sub'),
      desc: t('prot2Desc'),
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    },
    {
      title: t('prot3Title'),
      subtitle: t('prot3Sub'),
      desc: t('prot3Desc'),
      img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80'
    },
    {
      title: t('prot4Title'),
      subtitle: t('prot4Sub'),
      desc: t('prot4Desc'),
      img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="protocol" ref={containerRef} className="pb-[40vh] pt-32 px-6 relative bg-obsidian">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-sans font-medium uppercase tracking-[0.1em] mb-4 text-ivory">
            {t('protTitle1')} <span className="font-serif italic text-champagne block mt-2">{t('protTitle2')}</span>
          </h2>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="w-full bg-slate border border-ivory/10 rounded-[2.5rem] p-8 md:p-12 mb-10 md:mb-20 origin-top flex flex-col md:flex-row gap-10 shadow-2xl relative"
              style={{ zIndex: index, minHeight: '600px' }}
            >
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">{t('protPhase')} 0{index + 1}</span>
                <h3 className="text-3xl md:text-5xl font-serif italic mb-6 text-ivory">{step.title}</h3>
                <h4 className="font-sans font-medium uppercase tracking-[0.1em] text-ivory/60 mb-6">{step.subtitle}</h4>
                <p className="font-light text-ivory/80 leading-relaxed text-lg pb-10">
                  {step.desc}
                </p>
              </div>
              <div className="w-full md:w-1/2 rounded-[1.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-[300px] md:h-auto">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
