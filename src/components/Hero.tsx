import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 md:px-12">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full flex flex-col justify-center max-w-[1440px] mx-auto"
      >
        <motion.div variants={item} className="mb-8 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-[#E2B646]"></div>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">{t('hero_digital_craftsmanship')}</span>
        </motion.div>
        
        <motion.h1 variants={item} className="font-serif text-5xl md:text-6xl lg:text-[7rem] leading-[0.9] text-white mb-6 lg:mb-8 [text-shadow:1px_1px_0_#E2B646,0_0_10px_rgba(226,182,70,0.4)]">
          {t('hero_grow_together')} <br className="hidden md:block" />
          <span className="italic font-light text-[#E2B646] [text-shadow:1px_1px_0_#FFFFFF,0_0_10px_rgba(255,255,255,0.3)]">
            {t('hero_your_future')}
          </span>
        </motion.h1>
        
        <motion.p variants={item} className="max-w-md text-sm leading-relaxed opacity-60 mb-12">
          {t('hero_desc')}
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <a href="#store" aria-label="Jelajahi Produk di Store" className="group font-mono text-[10px] uppercase tracking-[0.2em] bg-[#E2B646] text-black px-8 py-3.5 hover:bg-[#f4d17f] transition-all duration-500 font-bold flex items-center gap-3 shadow-[0_0_20px_rgba(226,182,70,0.2)] hover:shadow-[0_0_30px_rgba(226,182,70,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
             <span>{t('hero_explore')}</span>
             <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
          </a>
          <a href="#consultation" className="font-mono text-[10px] uppercase tracking-[0.2em] border-b border-[#E2B646] pb-1.5 hover:text-[#E2B646] transition-colors duration-300 focus-visible:outline-none focus-visible:text-[#E2B646]">
             {t('hero_consult')}
          </a>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-12 right-12 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 rotate-[270deg] mb-4 origin-center">{t('hero_scroll')}</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-[#E2B646] to-transparent relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E2B646]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
