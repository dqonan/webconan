import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Quote } from "lucide-react";

export default function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      id: 1,
      content: t("review_1_content"),
      author: t("review_1_author"),
      role: t("review_1_role"),
    },
    {
      id: 2,
      content: t("review_2_content"),
      author: t("review_2_author"),
      role: t("review_2_role"),
    },
    {
      id: 3,
      content: t("review_3_content"),
      author: t("review_3_author"),
      role: t("review_3_role"),
    },
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 relative z-10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#E2B646]"></div>
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-60 block">
              {t("reviews_section_title")}
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
            {t("reviews_title_1")} <br />
            <span className="text-[#E2B646] italic font-light [text-shadow:1px_1px_0_#FFFFFF,0_0_10px_rgba(255,255,255,0.3)]">
              {t("reviews_title_2")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#0a0a0a] border border-[#ffffff05] p-8 md:p-10 hover:border-[#E2B64640] transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-[#E2B646] opacity-30 mb-6" size={32} />
                <p className="text-sm md:text-base leading-relaxed opacity-80 mb-8 italic">
                  "{review.content}"
                </p>
              </div>
              <div className="border-t border-[#ffffff10] pt-6 flex flex-col">
                <span className="font-serif text-white text-lg mb-1">
                  {review.author}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">
                  {t("reviews_client")} • {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
