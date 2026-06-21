import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

import img1 from "../assets/images/komikforge_dashboard_1781099432444.png";
import img2 from "../assets/images/narrata_dashboard_1781099447281.png";
import img3 from "../assets/images/conan_ai_dashboard_1781099463918.png";
import img4 from "../assets/images/uniletter_dashboard_1781099479066.png";
import img5 from "../assets/images/aerocore_pro_dashboard_1781099495478.png";
import img6 from "../assets/images/omnilite_pro_dashboard_1781099511702.png";
import img7 from "../assets/images/auto_video_ai_dashboard_1781099524756.png";
import img8 from "../assets/images/cafe_managed_dashboard_1781099538790.png";
import img9 from "../assets/images/morphswap_dashboard_1781099555540.png";
import imgDefault from "../assets/images/ai_studio_dashboard_showcase_1781061060914.png";

export default function Store() {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      title: "KomikFORGE",
      category: "AI Application",
      description: "AI-powered web manga and comic creator. Merancang dan membuat komik AI digital, mudah dan cepat.",
      price: "$ 159",
      type: "AI_STUDIO",
      demoUrl: "https://ais-dev-zlamxb7o5phyvletycbhnh-140028740585.asia-southeast1.run.app",
    },
    {
      id: 2,
      title: "NARRATA",
      category: "AI Application",
      description: "Konversi file mp4 yang kamu lihat menjadi karya literal, Cerpen, Novel, Makalah, Artikel, Esay, Naskah pidato, Script narasi dan sebagainya.",
      price: "$ 149",
      type: "AI_STUDIO",
      demoUrl: "https://ais-dev-jgjacjoyggryadw7pmbqec-140028740585.asia-southeast1.run.app",
    },
    {
      id: 3,
      title: "CONAN AI",
      category: "AI Application",
      description: "Buat video iklan untuk media digital apapun, semudah menulis surat, cepat, konsisten dan nol kesalahan. \"CONAN AI Video art spectacular\".",
      price: "Pengembangan",
      type: "AI_STUDIO",
      demoUrl: "https://ais-dev-vyej2zjobvv7wqdbawml72-140028740585.asia-southeast1.run.app",
    },
    {
      id: 4,
      title: "AUTO PROMPTER",
      category: "AI Application",
      description: "Asisten pembuat prompt yang akan membantumu menulis perintah AI dengan lebih terstruktur dan efisien.",
      price: "$ 149",
      type: "AI_STUDIO",
      demoUrl: "https://ais-dev-7ckwdz6ci2y2sc2fquhojp-140028740585.asia-southeast1.run.app",
    },
    {
      id: 5,
      title: "AEROCORE PRO",
      category: "AI Application",
      description: "Sistem otomasi pembuat video iklan impresif Human Caracter Realisme Kualitas \"waoww\".",
      price: "$ 665",
      type: "AI_STUDIO",
      demoUrl: "https://ais-dev-jpadyawqgibm4va572bl7e-140028740585.asia-southeast1.run.app",
    },
    {
      id: 6,
      title: "OMNILITE PRO",
      category: "AI Application",
      description: "E-commerce Enterprise Operational Engine & Command Center, Dashboard asisten pengawas AI marketplace tersentralisasi. Awasi semua tokomu dalam satu kendali terstruktur.",
      price: "Pengembangan",
      type: "AI_STUDIO",
      demoUrl: "https://ais-pre-iym2r2veuzloyrev3vg6vj-140028740585.asia-southeast1.run.app/",
    },
    {
      id: 7,
      title: "AUTOMASI VIDEO AI",
      category: "AI Application",
      description: "Buat video youtube apapun dengan otomatis.... Otomatis buat video AI apapun dengan sempurna.",
      price: "Pengembangan",
      type: "AI_STUDIO",
      demoUrl: "https://ais-dev-p75ogd47wlxf7zw27mjunu-140028740585.asia-southeast1.run.app",
    },
    {
      id: 8,
      title: "CAFE MANAGED",
      category: "AI Application",
      description: "Aplikasi manajemen dan pemesanan online untuk Cafe, Restoran dan kuliner Street food berbasis pemindaian QR. \"Hindari kerugian, lipat gandakan keuntungan, undang pembeli jauh\".",
      price: "$ 162",
      type: "AI_STUDIO",
      demoUrl: "https://ai.studio/apps/57e3324a-bfcb-47c2-88cb-97fc52870794",
    },
    {
      id: 9,
      title: "AI ADS AUTO",
      category: "AI Application",
      description: "Sistem otomasi pembuat iklan untuk kampanye produk atau jasamu.",
      price: "$ 189",
      type: "AI_STUDIO",
      demoUrl: "https://ais-dev-z5ga7s5owceqzh4zdp2zgn-266728176015.asia-east1.run.app",
    }
  ];

  const getProductShowcase = (id: number) => {
    let imageSrc = "";
    switch (id) {
      case 1:
        imageSrc = img1;
        break;
      case 2:
        imageSrc = img2;
        break;
      case 3:
        imageSrc = img3;
        break;
      case 4:
        imageSrc = img4;
        break;
      case 5:
        imageSrc = img5;
        break;
      case 6:
        imageSrc = img6;
        break;
      case 7:
        imageSrc = img7;
        break;
      case 8:
        imageSrc = img8;
        break;
      case 9:
        imageSrc = img9;
        break;
      default:
        imageSrc = imgDefault;
    }

    return (
      <div className="w-full h-full relative group-hover:scale-[1.05] transition-transform duration-700 p-8 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={`Dashboard Showcase ${id}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl drop-shadow-[0_0_20px_rgba(226,182,70,0.15)]"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  };

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
                {getProductShowcase(product.id)}
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
                  ) : product.type === "AI_STUDIO" ? (
                    <>
                      {product.demoUrl && (
                        <a
                          href={product.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] uppercase tracking-tighter border-b border-[#ffffff40] hover:border-[#E2B646] pb-1.5 hover:text-[#E2B646] transition-all focus-visible:outline-none focus-visible:text-[#E2B646] inline-block"
                        >
                          Buka Aplikasi
                        </a>
                      )}
                      <button className="font-mono text-[10px] uppercase tracking-[0.2em] bg-[#E2B646] text-black px-6 py-2.5 font-bold hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                        {product.price}
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
