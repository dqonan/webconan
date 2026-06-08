import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Sponsors() {
  const { t } = useLanguage();

  const sponsors = [
    "ALIBABA CLOUD",
    "VITE",
    "REACT",
    "TYPESCRIPT",
    "FRAMER MOTION",
    "TAILWIND CSS",
    "NARRATA LABS",
    "CONAN STUDIO",
  ];

  return (
    <section className="py-12 border-t border-b border-[#ffffff10] bg-[#050505] overflow-hidden relative z-10 flex flex-col justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-full h-full bg-gradient-to-r from-[#030303] via-transparent to-[#030303]"></div>
      </div>

      <div className="text-center mb-10 relative z-30">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40 text-white">
          {t("sponsors_trusted_by") || "ENDORSES & SUPPORTED BY"}
        </span>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Render double the list for seamless loop */}
          {[...sponsors, ...sponsors].map((name, i) => (
            <li
              key={i}
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#ffffff40] hover:text-[#E2B646] transition-colors duration-500 cursor-default px-8 whitespace-nowrap"
            >
              {name}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
