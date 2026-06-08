import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Philosophy from "./components/Philosophy";
import Archive from "./components/Archive";
import Store from "./components/Store";
import Reviews from "./components/Reviews";
import Interactions from "./components/Interactions";
import { useLanguage } from "./contexts/LanguageContext";

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative font-sans text-[#E0D8D0] selection:bg-[#E2B646]/30 bg-[#030303]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E2B646] focus:text-black"
      >
        {t("skip_to_main")}
      </a>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#030303]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#E2B646]/15 via-[#E2B646]/5 to-transparent blur-[140px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#E2B646]/10 to-transparent blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <Navbar />

      <main id="main" className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Sponsors />
        <Philosophy />
        <Archive />
        <Store />
        <Reviews />
        <Interactions />
      </main>

      <footer className="font-mono py-12 text-center text-[10px] tracking-widest uppercase opacity-40 border-t border-[#ffffff10] bg-[#050505] flex flex-col items-center justify-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} Conan Studio.{" "}
          {t("footer_copyright")}
          <br className="md:hidden" />
          <span className="hidden md:inline"> · </span> {t("footer_architect")}
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#E2B646] transition-colors">
            Term of Service
          </a>
          <span>·</span>
          <a href="#" className="hover:text-[#E2B646] transition-colors">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
