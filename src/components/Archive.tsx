import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowUpRight, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Archive() {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedArticle(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedArticle !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedArticle]);

  const archiveItems = [
    {
      id: 1,
      title: t("archive_item_1_title"),
      category: t("archive_item_1_cat"),
      date: "2026.04.12",
      author: "Alexander Rothschild",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      title: t("archive_item_2_title"),
      category: t("archive_item_2_cat"),
      date: "2026.05.03",
      author: "Isabella Sterling",
      image:
        "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 3,
      title: t("archive_item_3_title"),
      category: t("archive_item_3_cat"),
      date: "2026.05.28",
      author: "Jonathan Pierce",
      image:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 4,
      title: t("archive_item_4_title"),
      category: t("archive_item_4_cat"),
      date: "2026.06.02",
      author: "D. Qonan",
      image:
        "https://images.unsplash.com/photo-1481481600465-95e263ab205d?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <section
      id="archive"
      className="py-16 lg:py-24 relative z-10 bg-[#060606] border-t border-[#ffffff05]"
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between px-6 lg:px-12 mb-16 max-w-[1440px] mx-auto gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#E2B646]"></div>
              <span className="font-mono text-[10px] tracking-widest uppercase opacity-60 block">
                {t("archive_section_title")}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              {t("archive_title_1")} <br />
              <span className="text-[#E2B646] italic font-light [text-shadow:1px_1px_0_#FFFFFF,0_0_10px_rgba(255,255,255,0.3)]">
                {t("archive_title_2")}
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col w-full">
          {archiveItems.map((item, index) => (
            <motion.a
              href="#"
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                if (item.id === 4) setSelectedArticle(4);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 border-t border-[#ffffff08] hover:bg-[#111] transition-all duration-700 overflow-hidden focus-visible:outline-none focus-visible:bg-[#111]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-1000 z-0 pointer-events-none"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full lg:w-2/3">
                <div className="flex flex-col md:w-32 gap-1 group-hover:opacity-100 transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 group-hover:text-[#E2B646] group-hover:opacity-100 transition-colors">
                    {item.date}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-30 text-white truncate">
                    By {item.author}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-4xl text-white group-hover:translate-x-4 transition-transform duration-500 ease-out">
                  {item.title}
                </h3>
              </div>

              <div className="relative z-10 flex items-center justify-between md:justify-end gap-8 w-full lg:w-1/3 mt-8 md:mt-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 border border-[#ffffff20] px-3 py-1 rounded-full group-hover:border-[#E2B646] group-hover:text-[#E2B646] transition-colors">
                  {item.category}
                </span>
                <div className="w-12 h-12 rounded-full border border-[#ffffff20] flex items-center justify-center group-hover:bg-[#E2B646] group-hover:border-[#E2B646] transition-colors duration-500 text-white group-hover:text-black">
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-[#ffffff08] w-full"></div>
        </div>
      </div>

      <AnimatePresence>
        {selectedArticle === 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-[#ffffff20] overflow-y-auto flex flex-col"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-[#ffffff10] flex items-center justify-center hover:bg-[#E2B646] hover:text-black hover:border-transparent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]"
              >
                <X size={20} />
              </button>

              <div className="relative w-full h-[40vh] min-h-[300px] shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=1200')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E2B646] mb-4">
                    2026.06.02 &nbsp;|&nbsp; {t("archive_item_4_cat")} &nbsp;|&nbsp; By D. Qonan
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] max-w-3xl">
                    {t("archive_item_4_content_title")}
                  </h2>
                </div>
              </div>

              <div className="px-8 md:px-16 py-12 md:py-16 mx-auto lg:mx-0 max-w-3xl flex flex-col gap-8 text-white/80 leading-relaxed font-sans font-light">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  {t("archive_item_4_content_p1")}
                </p>
                <p>{t("archive_item_4_content_p2")}</p>

                <div className="w-12 h-[1px] bg-[#E2B646] my-4"></div>

                <h3 className="font-serif text-2xl md:text-3xl text-white mt-4">
                  {t("archive_item_4_content_h1")}
                </h3>
                <p>{t("archive_item_4_content_p3")}</p>
                <p className="pl-6 border-l border-[#E2B646] italic opacity-80 py-2">
                  {t("archive_item_4_content_p4")}
                </p>
                <p className="whitespace-pre-line">
                  {t("archive_item_4_content_p5")}
                </p>
                <p>{t("archive_item_4_content_p6")}</p>

                <h3 className="font-serif text-2xl md:text-3xl text-white mt-8">
                  {t("archive_item_4_content_h2")}
                </h3>
                <p>{t("archive_item_4_content_p7")}</p>
                <p className="whitespace-pre-line">
                  {t("archive_item_4_content_p8")}
                </p>
                <p>{t("archive_item_4_content_p9")}</p>
                <p className="text-[#E2B646]">
                  {t("archive_item_4_content_p10")}
                </p>

                <h3 className="font-serif text-2xl md:text-3xl text-white mt-8">
                  {t("archive_item_4_content_h3")}
                </h3>
                <p>{t("archive_item_4_content_p11")}</p>
                <p>{t("archive_item_4_content_p12")}</p>

                <h3 className="font-serif text-2xl md:text-3xl text-white mt-8">
                  {t("archive_item_4_content_h4")}
                </h3>
                <p>{t("archive_item_4_content_p13")}</p>
                <p className="whitespace-pre-line">
                  {t("archive_item_4_content_p14")}
                </p>
                <p>{t("archive_item_4_content_p15")}</p>

                <h3 className="font-serif text-2xl md:text-3xl text-white mt-8">
                  {t("archive_item_4_content_h5")}
                </h3>
                <p>{t("archive_item_4_content_p16")}</p>
                <p>{t("archive_item_4_content_p17")}</p>
                <p className="font-medium text-white">
                  {t("archive_item_4_content_p18")}
                </p>

                <div className="mt-16 pt-8 border-t border-[#ffffff10] flex justify-between items-center">
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                    Share Article
                  </span>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full border border-[#ffffff20] flex items-center justify-center hover:bg-[#E2B646] hover:text-black transition-colors">
                      <span className="font-serif text-sm">X</span>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-[#ffffff20] flex items-center justify-center hover:bg-[#E2B646] hover:text-black transition-colors">
                      <span className="font-serif text-sm">in</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
