import { motion } from 'motion/react';
import { PenTool, Laptop, Code2, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="philosophy" className="py-16 lg:py-24 px-6 md:px-12 relative z-10 bg-[#080808]">
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start gap-8"
        >
          <div className="flex-1">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-[#E2B646]"></div>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">{t('phil_identity')}</span>
             </div>
             <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
                {t('phil_title_1')} <br/><span className="text-[#E2B646] italic font-light [text-shadow:1px_1px_0_#FFFFFF,0_0_10px_rgba(255,255,255,0.3)]">{t('phil_title_2')}</span>
             </h2>
          </div>
          <div className="flex-1 max-w-sm mt-4 md:mt-0 md:pl-8 lg:pl-12">
             <p className="text-sm leading-relaxed opacity-60">{t('phil_desc')}</p>
          </div>
        </motion.div>

        {/* Bento Box Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#ffffff08]"
        >
          {/* Box 1 */}
          <motion.div variants={itemVariants} tabIndex={0} className="md:col-span-2 group relative overflow-hidden bg-[#111] border-b border-r border-[#ffffff08] p-8 md:p-12 min-h-[300px] lg:h-[350px] hover:border-[#E2B64640] transition-all duration-700 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]">
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em] block">{t('phil_principle_01')}</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-[#ffffff10] flex items-center justify-center mb-6 text-[#E2B646] group-hover:bg-[#E2B646] group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(226,182,70,0.1)] group-hover:shadow-[0_0_20px_rgba(226,182,70,0.4)]">
                <PenTool size={18} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white">{t('phil_creativity')}</h3>
              <p className="text-sm opacity-60 max-w-md leading-relaxed group-hover:opacity-100 transition-opacity duration-500">Kami merajut gagasan segar dengan imajinasi tanpa batas, menciptakan identitas yang membedakan Anda di tengah keseragaman digital.</p>
            </div>
          </motion.div>

          {/* Box 2 */}
          <motion.div variants={itemVariants} tabIndex={0} className="group relative overflow-hidden bg-[#111] border-b border-r border-[#ffffff08] p-8 md:p-12 min-h-[300px] lg:h-[350px] hover:border-[#E2B64640] transition-all duration-700 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]">
             <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em] block">{t('phil_principle_02')}</span>
             <div className="relative z-10">
               <div className="w-10 h-10 border border-[#ffffff10] flex items-center justify-center mb-6 text-[#E2B646] group-hover:bg-[#E2B646] group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(226,182,70,0.1)] group-hover:shadow-[0_0_20px_rgba(226,182,70,0.4)]">
                 <Sparkles size={18} />
               </div>
               <h3 className="font-serif text-2xl mb-4 text-white">{t('phil_precision')}</h3>
               <p className="text-sm opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity duration-500">Tata letak asimetris dan tipografi yang presisi dirancang secara terukur untuk memikat perhatian audiens.</p>
             </div>
          </motion.div>

          {/* Box 3 */}
          <motion.div variants={itemVariants} tabIndex={0} className="group relative overflow-hidden bg-[#111] border-b border-r border-[#ffffff08] p-8 md:p-12 min-h-[300px] lg:h-[350px] hover:border-[#E2B64640] transition-all duration-700 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]">
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em] block">{t('phil_capability')}</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-[#ffffff10] flex items-center justify-center mb-6 text-[#E2B646] group-hover:bg-[#E2B646] group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(226,182,70,0.1)] group-hover:shadow-[0_0_20px_rgba(226,182,70,0.4)]">
                <Code2 size={18} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-white">{t('phil_dev')}</h3>
              <p className="text-sm opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity duration-500">Mengubah sistem logika yang rumit menjadi struktur antarmuka yang sangat elegan dan fungsional.</p>
            </div>
          </motion.div>

          {/* Box 4 */}
          <motion.div variants={itemVariants} tabIndex={0} className="md:col-span-2 group relative overflow-hidden bg-[#151515] border-b border-r border-[#ffffff08] p-8 md:p-12 min-h-[300px] lg:h-[350px] hover:border-[#E2B64640] transition-all duration-700 cursor-pointer flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]">
            <span className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em] block text-[#E2B646]">{t('phil_archive')}</span>
            <div className="relative z-10">
              <div className="w-10 h-10 border border-[#ffffff10] flex items-center justify-center mb-6 text-[#E2B646] group-hover:bg-[#E2B646] group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(226,182,70,0.1)] group-hover:shadow-[0_0_20px_rgba(226,182,70,0.4)]">
                 <Laptop size={18} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white">{t('phil_archive_title')}</h3>
              <p className="text-sm opacity-60 max-w-lg leading-relaxed group-hover:opacity-100 transition-opacity duration-500">Tempat di mana artikel, gagasan, gambar, dan video dituangkan menjadi sebuah mahakarya yang berbicara dengan sendirinya.</p>
              <div className="mt-8 text-[#E2B646] text-xs font-serif italic flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                 {t('phil_explore_archive')} <span className="text-sm">&rarr;</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
