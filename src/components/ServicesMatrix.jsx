import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesMatrix() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current, 
        {
          y: 80,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: '01',
      title: t('serv1Title'),
      subtitle: t('serv1Sub'),
      icon: <Zap className="text-champagne mb-8" size={36} strokeWidth={1.5} />,
      points: [
        t('serv1P1'),
        t('serv1P2'),
        t('serv1P3')
      ],
      description: t('serv1Desc'),
    },
    {
      id: '02',
      title: t('serv2Title'),
      subtitle: t('serv2Sub'),
      icon: <ShieldCheck className="text-champagne mb-8" size={36} strokeWidth={1.5} />,
      points: [
        t('serv2P1'),
        t('serv2P2'),
        t('serv2P3')
      ],
      description: t('serv2Desc'),
    },
    {
      id: '03',
      title: t('serv3Title'),
      subtitle: t('serv3Sub'),
      icon: <Target className="text-champagne mb-8" size={36} strokeWidth={1.5} />,
      points: [
        t('serv3P1'),
        t('serv3P2'),
        t('serv3P3')
      ],
      description: t('serv3Desc'),
    }
  ];

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 md:px-12 bg-obsidian relative border-y border-ivory/5 z-20">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-champagne/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 md:flex justify-between items-end gap-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-sans font-medium uppercase tracking-[0.1em] text-ivory mb-2">
              {t('servTitle1')}<span className="font-serif italic text-champagne">{t('servTitle2')}</span>
            </h2>
            <div className="w-20 h-[1px] bg-champagne/50 mt-8 mb-8 md:hidden" />
          </div>
          <div className="flex-1">
            <p className="text-ivory/60 text-lg font-light leading-relaxed max-w-xl md:ml-auto">
              {t('servSubtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div 
              key={idx} 
              ref={el => cardsRef.current[idx] = el}
              className="group bg-slate/20 border border-ivory/10 hover:border-champagne/30 hover:bg-slate/30 transition-all duration-700 rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col h-full transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 font-mono text-9xl text-champagne pointer-events-none select-none">
                {svc.id}
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <div>
                  {svc.icon}
                  <h3 className="text-3xl font-serif italic text-ivory mb-3">{svc.title}</h3>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-champagne/80 mb-8 font-medium">
                    {svc.subtitle}
                  </h4>
                  
                  <p className="font-light text-ivory/70 text-sm leading-relaxed mb-10">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-full h-[1px] bg-gradient-to-r from-ivory/10 to-transparent mb-8" />

                  <ul className="space-y-5">
                    {svc.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-champagne/50 mt-[0.4rem] flex-shrink-0 group-hover:bg-champagne group-hover:shadow-[0_0_10px_rgba(201,168,76,0.8)] transition-all duration-500" />
                        <span className="font-sans text-[11px] text-ivory/60 uppercase tracking-widest leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 mt-14 pt-6 border-t border-ivory/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">{t('servInitiate')}</span>
                <span className="text-champagne transform group-hover:translate-x-3 transition-transform duration-500 ease-out">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
