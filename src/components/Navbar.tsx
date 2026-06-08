import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 px-6 py-4 md:py-6 transition-all duration-700 ${scrolled ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-[#ffffff10] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent'} text-[#E0D8D0]`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/images/conan_studio_cosmic_logo_1780570099433.png" 
              alt="Conan Studio Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:drop-shadow-[0_0_15px_rgba(226,182,70,0.6)] transition-all duration-500 rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl tracking-tighter text-[#F2F2F2] uppercase group-hover:text-[#E2B646] transition-colors duration-500">CONAN STUDIO</span>
              <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase opacity-50">{t('footer_architect').replace('.', '')}</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-[9px] lg:text-[11px] font-medium tracking-[0.2em] uppercase">
          <a href="#philosophy" className="font-mono hover:text-[#E2B646] transition-colors duration-500 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_philosophy')}</a>
          <a href="#archive" className="font-mono hover:text-[#E2B646] transition-colors duration-500 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_archive')}</a>
          <a href="#store" className="font-mono hover:text-[#E2B646] transition-colors duration-500 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_exhibition')}</a>
          <a href="#reviews" className="font-mono hover:text-[#E2B646] transition-colors duration-500 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_reviews')}</a>
          <a href="#consultation" className="font-mono hover:text-[#E2B646] transition-colors duration-500 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_consultation')}</a>
          
          <div className="flex items-center gap-2 border-l border-[#ffffff20] pl-4 lg:pl-8 font-mono text-[9px]">
            <button 
              onClick={() => setLanguage('ID')}
              className={`${language === 'ID' ? 'text-[#E2B646] font-bold' : 'text-[#E0D8D0] opacity-50 hover:opacity-100'} transition-all focus-visible:outline-none focus-visible:text-[#E2B646]`}
            >
              ID
            </button>
            <span className="opacity-30">/</span>
            <button 
              onClick={() => setLanguage('EN')}
              className={`${language === 'EN' ? 'text-[#E2B646] font-bold' : 'text-[#E0D8D0] opacity-50 hover:opacity-100'} transition-all focus-visible:outline-none focus-visible:text-[#E2B646]`}
            >
              EN
            </button>
          </div>

          <a href="#store" aria-label="Visit Store" className="font-mono border border-[#E2B646] px-5 py-2 text-[#E2B646] hover:bg-[#E2B646] hover:text-black transition-all duration-500 -mt-1 shadow-[0_0_15px_rgba(226,182,70,0.1)] hover:shadow-[0_0_20px_rgba(226,182,70,0.4)] focus-visible:outline-none focus-visible:bg-[#E2B646] focus-visible:text-black">{t('nav_store')}</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden z-50 relative p-2 text-[#E0D8D0] hover:text-white focus-visible:outline-none focus-visible:text-[#E2B646]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[100%] left-0 right-0 bg-[#080808]/95 border-b border-[#ffffff10] flex flex-col gap-0 md:hidden text-[11px] tracking-[0.2em] uppercase font-medium backdrop-blur-xl overflow-hidden"
            >
              <motion.a 
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}
                href="#philosophy" onClick={() => setIsOpen(false)} className="font-mono hover:text-[#E2B646] transition-colors border-b border-[#ffffff08] p-6 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_philosophy')}</motion.a>
              <motion.a 
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}
                href="#archive" onClick={() => setIsOpen(false)} className="font-mono hover:text-[#E2B646] transition-colors border-b border-[#ffffff08] p-6 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_archive')}</motion.a>
              <motion.a 
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
                href="#store" onClick={() => setIsOpen(false)} className="font-mono hover:text-[#E2B646] transition-colors border-b border-[#ffffff08] p-6 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_exhibition')}</motion.a>
              <motion.a 
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}
                href="#reviews" onClick={() => setIsOpen(false)} className="font-mono hover:text-[#E2B646] transition-colors border-b border-[#ffffff08] p-6 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_reviews')}</motion.a>
              <motion.a 
                initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
                href="#consultation" onClick={() => setIsOpen(false)} className="font-mono hover:text-[#E2B646] transition-colors border-b border-[#ffffff08] p-6 focus-visible:outline-none focus-visible:text-[#E2B646]">{t('nav_consultation')}</motion.a>
              
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }} className="flex border-b border-[#ffffff08]">
                 <button 
                   onClick={() => { setLanguage('ID'); setIsOpen(false); }} 
                   className={`flex-1 p-6 font-mono text-center transition-colors focus-visible:outline-none ${language === 'ID' ? 'text-[#E2B646] bg-[#ffffff05]' : 'text-[#E0D8D0] hover:bg-[#ffffff02]'}`}
                 >ID</button>
                 <div className="w-[1px] bg-[#ffffff08]"></div>
                 <button 
                   onClick={() => { setLanguage('EN'); setIsOpen(false); }} 
                   className={`flex-1 p-6 font-mono text-center transition-colors focus-visible:outline-none ${language === 'EN' ? 'text-[#E2B646] bg-[#ffffff05]' : 'text-[#E0D8D0] hover:bg-[#ffffff02]'}`}
                 >EN</button>
              </motion.div>

              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="p-6">
                 <a href="#store" onClick={() => setIsOpen(false)} className="font-mono block border border-[#E2B646] px-4 py-4 text-[#E2B646] font-bold text-center hover:bg-[#E2B646] hover:text-black transition-colors w-full shadow-[0_0_15px_rgba(226,182,70,0.1)] focus-visible:outline-none focus-visible:bg-[#E2B646] focus-visible:text-black">{t('nav_store')}</a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
