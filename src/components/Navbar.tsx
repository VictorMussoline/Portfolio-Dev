import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../i18n/Context";
import "./Navbar.css";

const NAV_ITEMS = [
  { id: "about", key: "about" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;

export function Navbar() {
  const { t, lang, toggleLang } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracking for nav highlights
      const sectionIds = ["contact", "projects", "experience", "about"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let found = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar-container">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }} className="navbar-logo" aria-label="Home">
          <span className="logo-badge">VM</span>
        </a>

        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="nav-active-pill"
                        initial={{ opacity: 0, scaleX: 0.7 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0.7 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                          opacity: { duration: 0.3 }
                        }}
                      />
                    )}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="navbar-actions">
          <button onClick={toggleLang} className="nav-action-btn lang-btn" aria-label="Toggle language">
            <Globe size={14} /> {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>
      </nav>
    </header>
  );
}
