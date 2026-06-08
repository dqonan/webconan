import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Store() {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      title: t("store_prod_1_title"),
      category: t("store_prod_1_cat"),
      description: t("store_prod_1_desc"),
      price: "Buy WITH TOKEN",
      type: t("store_type_premium"),
      demoUrl: "https://github.com",
    },
    {
      id: 2,
      title: t("store_prod_2_title"),
      category: t("store_prod_2_cat"),
      description: t("store_prod_2_desc"),
      price: t("store_type_trial") === "Trial" ? "Free" : "Gratis",
      type: t("store_type_trial"),
      demoUrl: "https://github.com",
    },
    {
      id: 3,
      title: t("store_prod_3_title"),
      category: t("store_prod_3_cat"),
      description: t("store_prod_3_desc"),
      price: "$89",
      type: t("store_type_premium"),
      demoUrl: "https://github.com",
    },
    {
      id: 4,
      title: t("store_prod_4_title"),
      category: t("store_prod_4_cat"),
      description: t("store_prod_4_desc"),
      price: "$49",
      type: t("store_type_premium"),
      demoUrl: "https://github.com",
    },
  ];

  return (
    <section id="store" className="py-16 lg:py-24 relative z-10 bg-[#080808]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-6 md:px-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#E2B646]"></div>
              <span className="font-mono text-[10px] tracking-widest uppercase opacity-60 block">
                {t("store_exhibition")}
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              {t("store_title_1")}{" "}
              <span className="text-[#E2B646] italic font-light [text-shadow:1px_1px_0_#FFFFFF,0_0_10px_rgba(255,255,255,0.3)]">
                {t("store_title_2")}
              </span>
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-mono text-[10px] uppercase tracking-[0.2em] border-b border-[#E2B646] pb-1.5 hover:text-[#E2B646] transition-all mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]"
          >
            {t("store_view_all")}
          </motion.button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border-t border-l border-[#ffffff08]"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group flex flex-col relative bg-[#111] border-b border-r border-[#ffffff08] hover:border-[#E2B64640] hover:bg-[#151515] transition-all duration-700 focus-within:ring-2 focus-within:ring-[#E2B646]"
            >
              <div className="h-64 flex flex-col justify-center items-center text-center p-10 border-b border-[#ffffff08] relative overflow-hidden bg-[#0a0a0a]">
                {product.type === "Uji Coba" && (
                  <div className="absolute top-6 left-6 flex">
                    <span className="bg-[#E2B64620] text-[#E2B646] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold border border-[#E2B64630] shadow-[0_0_10px_rgba(226,182,70,0.2)] group-hover:bg-[#E2B646] group-hover:text-black transition-colors duration-500">
                      {t("store_new_release")}
                    </span>
                  </div>
                )}
                {product.id === 1 ? (
                  /* Abstract UI Box for Logic Interface */
                  <div className="w-24 h-32 bg-[#151515] border border-[#ffffff10] flex flex-col p-4 shadow-2xl text-left scale-[1.2] group-hover:scale-[1.25] transition-transform duration-700">
                    <div className="w-full h-1 bg-[#ffffff10] mb-2"></div>
                    <div className="w-2/3 h-1 bg-[#ffffff10] mb-5"></div>
                    <div className="w-full h-0.5 bg-[#E2B64640] mb-1"></div>
                    <div className="w-4/5 h-0.5 bg-[#E2B64640] mb-1"></div>
                    <div className="w-full h-8 border border-[#ffffff10] mt-auto"></div>
                  </div>
                ) : (
                  /* Abstract Circle for others */
                  <div className="w-40 h-40 bg-gradient-to-tr from-[#1a1a1a] to-[#0a0a0a] border border-[#ffffff10] rounded-full flex items-center justify-center shadow-2xl relative group-hover:shadow-[0_0_40px_rgba(226,182,70,0.2)] transition-shadow duration-700">
                    <div className="absolute inset-0 rounded-full border border-[#E2B64620] group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100 group-hover:border-[#E2B64660]"></div>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E2B646] mb-4 font-bold">
                  {product.category}
                </span>
                <h4 className="font-serif text-2xl text-white mb-4">
                  {product.title}
                </h4>
                <p className="text-sm opacity-60 mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>

                <div className="pt-6 border-t border-[#ffffff10] flex justify-between items-center mt-auto">
                  {product.type === "Uji Coba" ? (
                    <>
                      <button className="font-mono text-[10px] uppercase tracking-[0.2em] bg-white text-black px-6 py-2.5 font-bold hover:bg-[#E2B646] hover:shadow-[0_0_15px_rgba(226,182,70,0.3)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]">
                        {t("store_explore")}
                      </button>
                    </>
                  ) : (
                    <>
                      {product.demoUrl ? (
                        <a
                          href={product.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] uppercase tracking-tighter border-b border-[#ffffff40] hover:border-[#E2B646] pb-1.5 hover:text-[#E2B646] transition-all focus-visible:outline-none focus-visible:text-[#E2B646] inline-block"
                        >
                          {t("store_demo")} (Run Live)
                        </a>
                      ) : (
                        <button className="font-mono text-[10px] uppercase tracking-tighter border-b border-[#ffffff40] hover:border-[#E2B646] pb-1.5 hover:text-[#E2B646] transition-all focus-visible:outline-none focus-visible:text-[#E2B646]">
                          {t("store_demo")} (Run Live)
                        </button>
                      )}
                      <button className="font-mono text-[10px] uppercase tracking-[0.2em] bg-[#E2B646] text-black px-6 py-2.5 font-bold hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                        {t("store_acquire")} • {product.price}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
