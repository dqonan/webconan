import { motion } from "motion/react";
import { Send, Paperclip } from "lucide-react";
import { useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Interactions() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate backend submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setFile(null);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <section
      id="consultation"
      className="py-16 lg:py-24 relative z-10 bg-[#080808]"
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-0 border-t border-b border-[#ffffff08]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 p-8 md:p-16 lg:p-24 border-r border-[#ffffff08] bg-[#111]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#E2B646]"></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                {t("contact_consultation")}
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white mb-8">
              {t("contact_title_1")} <br /> {t("contact_title_2")} <br />
              <span className="text-[#E2B646] italic font-light hover:text-white transition-colors duration-500 cursor-default [text-shadow:1px_1px_0_#FFFFFF,0_0_10px_rgba(255,255,255,0.3)]">
                {t("contact_title_3")}
              </span>
            </h2>

            <p className="text-sm opacity-60 max-w-md leading-relaxed mb-16">
              {t("contact_desc")}
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 block mb-2">
                  {t("contact_direct_email")}
                </span>
                <a
                  href="mailto:Dqonan@gmail.com"
                  className="text-lg hover:text-[#E2B646] transition-colors font-serif focus-visible:outline-none focus-visible:text-[#E2B646]"
                >
                  Dqonan@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 block mb-2">
                  {t("contact_studio_loc")}
                </span>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                  {t("contact_address_line1")} <br />
                  {t("contact_address_line2")} <br />
                  {t("contact_address_line3")}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Desa+Tanjungtani,+Kecamatan+Prambon,+Kabupaten+Nganjuk,+Jawa+Timur+64484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] border-b border-[#E2B646] pb-1.5 hover:text-[#E2B646] transition-all focus-visible:outline-none focus-visible:text-[#E2B646]"
                >
                  {t("contact_map_link")}
                </a>
                <span className="font-mono text-[10px] opacity-60 mt-4 block">
                  {t("contact_remote_only")}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-[1.2] p-8 md:p-16 lg:p-24 bg-[#0a0a0a]"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto h-full flex flex-col items-center justify-center text-center gap-6 min-h-[400px]"
              >
                <div className="w-20 h-20 rounded-full border border-[#E2B646] flex items-center justify-center text-[#E2B646] bg-[#E2B646]/10 mb-4">
                  <Send size={32} />
                </div>
                <h3 className="font-serif text-3xl text-white">
                  {t("contact_form_success_title")}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-md">
                  {t("contact_form_success_desc")}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-[#E2B646] pb-1.5 hover:text-[#E2B646] transition-all text-white focus-visible:outline-none focus-visible:text-[#E2B646]"
                >
                  {t("contact_form_name") === "Identity"
                    ? "Send Another Message"
                    : "Kirim Pesan Lain"}
                </button>
              </motion.div>
            ) : (
              <form
                className="max-w-xl mx-auto flex flex-col gap-12"
                onSubmit={handleSubmit}
              >
                <div className="group">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4 block group-focus-within:text-[#E2B646] group-focus-within:opacity-100 transition-all"
                  >
                    {t("contact_form_name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#ffffff20] text-xl py-4 text-white focus:outline-none focus:border-[#E2B646] transition-colors placeholder:text-transparent"
                    placeholder={t("contact_form_name_ph")}
                    required
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4 block group-focus-within:text-[#E2B646] group-focus-within:opacity-100 transition-all"
                  >
                    {t("contact_form_email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#ffffff20] text-xl py-4 text-white focus:outline-none focus:border-[#E2B646] transition-colors placeholder:text-transparent"
                    placeholder={t("contact_form_email_ph")}
                    required
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4 block group-focus-within:text-[#E2B646] group-focus-within:opacity-100 transition-all"
                  >
                    {t("contact_form_message")}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full bg-transparent border-b border-[#ffffff20] text-lg py-4 text-white focus:outline-none focus:border-[#E2B646] transition-colors resize-none placeholder:text-transparent"
                    placeholder={t("contact_form_message_ph")}
                  ></textarea>
                </div>

                <div className="group pt-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4 block transition-all group-hover:text-[#E2B646] group-hover:opacity-100">
                    {t("contact_form_upload")}
                  </label>
                  <div
                    className="w-full border border-dashed border-[#ffffff20] hover:border-[#E2B646] hover:bg-[#ffffff02] transition-colors p-8 flex flex-col items-center justify-center cursor-pointer min-h-[140px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && fileInputRef.current?.click()
                    }
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".txt,.md,.pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,.rar"
                    />

                    {file ? (
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-[#E2B646] flex items-center justify-center text-[#E2B646] bg-[#E2B646]/10">
                          <Paperclip size={18} />
                        </div>
                        <p className="font-mono text-[11px] text-[#E2B646] text-center max-w-[250px] truncate">
                          {file.name}
                        </p>
                        <span className="text-[10px] opacity-50 uppercase tracking-widest">
                          {t("contact_form_upload_selected")}{" "}
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <Paperclip
                          size={20}
                          className="text-white opacity-40 group-hover:text-[#E2B646] group-hover:opacity-100 transition-colors"
                        />
                        <p className="font-mono text-[10px] opacity-60 text-center">
                          {t("contact_form_upload_ph")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`group relative mt-8 flex items-center justify-between w-full p-6 lg:p-8 ${isSubmitting ? "bg-[#E2B646] cursor-wait" : "bg-[#151515] hover:bg-[#E2B646]"} transition-all duration-700 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B646]`}
                >
                  <div className="absolute inset-0 w-full h-full bg-[#111] group-hover:w-0 transition-all duration-700 ease-in-out right-0 origin-right ml-auto z-0"></div>
                  <span
                    className={`relative z-10 text-[11px] md:text-sm uppercase tracking-[0.2em] font-bold ${isSubmitting ? "text-black" : "group-hover:text-black"} transition-colors duration-700`}
                  >
                    {isSubmitting ? "Memproses..." : t("contact_form_submit")}
                  </span>
                  <motion.div
                    animate={{ x: isHovered && !isSubmitting ? 10 : 0 }}
                    className={`relative z-10 w-12 h-12 rounded-full border flex items-center justify-center ${isSubmitting ? "border-black/20 text-black" : "border-[#ffffff20] group-hover:border-black/20 group-hover:text-black"}`}
                  >
                    <Send
                      size={16}
                      className={
                        isSubmitting
                          ? "animate-pulse"
                          : "group-hover:translate-x-1 transition-transform"
                      }
                    />
                  </motion.div>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
