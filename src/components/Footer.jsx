import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#050508] text-ivory/60 pt-20 pb-10 px-6 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="flex flex-col gap-6">
          <a href="/" className="inline-block opacity-80 hover:opacity-100 transition-opacity">
            <img src="/atlas-logo.png" alt="ATLAS" className="h-10 md:h-12 object-contain" />
          </a>
          <p className="text-ivory/50 font-sans font-light leading-relaxed text-sm max-w-sm">
            {t('footDesc')}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-10">
          <div className="max-w-md text-left md:text-right">
            <div className="mt-8 flex items-center md:justify-end gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
               <span className="text-[10px] font-mono uppercase tracking-widest text-champagne/80">{t('footTag')}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-8 font-mono text-xs uppercase tracking-widest">
             <a href="https://t.me/max_sope" target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors group flex items-center gap-2">
               Telegram <span className="group-hover:translate-x-1 transition-transform">→</span>
             </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest opacity-50">
        <p>&copy; {new Date().getFullYear()} {t('footCopy')}</p>
        <p>{t('footMade')}</p>
      </div>
    </footer>
  );
}
