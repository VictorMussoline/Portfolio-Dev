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

const TECH_LOGOS = [
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Python", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "React Native", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Expo", url: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg" },
  { name: "Claude", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/claude.svg" },
  { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Arch Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
];

export interface NavbarProps {
  onBackToHome?: () => void;
  viewingAllProjects?: boolean;
}

export function Navbar({ onBackToHome, viewingAllProjects }: NavbarProps) {
  const { t, lang, toggleLang } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [currentTechIdx, setCurrentTechIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIdx((prev) => (prev + 1) % TECH_LOGOS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const path = window.location.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
      if (viewingAllProjects || path === "all-projects" || path === "projects/all") {
        setActiveSection("");
        return;
      }

      // Section tracking for nav highlights
      const sectionIds = ["contact", "projects", "experience", "about"];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let found = "";
      if (window.scrollY > 150) {
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
      }
      setActiveSection(found);

      // Automatically sync URL pathname on scroll
      const targetPath = found ? `/${found}` : "/";
      if (window.location.pathname !== targetPath) {
        window.history.replaceState({ section: found || "hero" }, "", targetPath);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [viewingAllProjects]);

  const scrollToSection = (id: string) => {
    const path = id === "hero" ? "/" : `/${id}`;
    if (window.location.pathname !== path) {
      window.history.pushState({ section: id }, "", path);
    }
    if (viewingAllProjects && onBackToHome) {
      onBackToHome();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar-container">
        <a href="/" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }} className="navbar-logo" aria-label="Home">
          <div className="logo-stack-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentTechIdx}
                src={TECH_LOGOS[currentTechIdx].url}
                alt={TECH_LOGOS[currentTechIdx].name}
                title={TECH_LOGOS[currentTechIdx].name}
                className={`logo-stack-icon logo-${TECH_LOGOS[currentTechIdx].name.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, scale: 0.6, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: -10 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
        </a>

        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`/${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
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
                </a>
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
