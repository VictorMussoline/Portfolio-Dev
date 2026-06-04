import { Github, Linkedin, Mail, CheckCircle2, Globe, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

import { useI18n } from "./i18n/Context";
import { useGitHubProjects } from "./hooks/useGitHubProjects";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { TechCard } from "./components/TechCard";
import { ProjectCard } from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm";
import { CustomCursor } from "./components/CustomCursor";
import { ParticlesBackground } from "./components/ParticlesBackground";

export default function Portfolio() {
  const { t, lang, toggleLang } = useI18n();
  const { projects, loading } = useGitHubProjects("VictorMussoline");
  
  // Parallax effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <>
      <CustomCursor />
      <ParticlesBackground />

      <div style={{ position: "fixed", top: "1.5rem", right: "2rem", zIndex: 100 }}>
        <button 
          onClick={toggleLang}
          className="btn-outline"
          style={{ padding: "0.5rem 1rem", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Globe size={16} /> {lang === "pt" ? "EN" : "PT"}
        </button>
      </div>

      {/* HERO SECTION COM PARALLAX */}
      <section className="hero-wrapper">
        <motion.div className="hero-content" style={{ y: y1 }}>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.greeting} <span className="highlight">Victor</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            className="buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a className="btn-primary" href="#projects">
              {t.hero.btnProjects}
            </a>
            <a className="btn-outline" href="#contact">
              {t.hero.btnContact}
            </a>
            <a className="btn-outline" href="/cv.pdf" download="Victor_Mussoline_Curriculo.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Download size={18} /> {t.hero.btnCV}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section className="container">
        <AnimateOnScroll>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="card">
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* STACK */}
      <section className="container" style={{ paddingTop: 0 }}>
        <AnimateOnScroll>
          <h2 className="section-title">{t.stack.title}</h2>
        </AnimateOnScroll>
        <div className="grid-3">
          <TechCard
            title={t.stack.frontend}
            items={["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind"]}
          />
          <TechCard
            title={t.stack.backend}
            items={["Java", "Node.js", "Python", "Firebase", "Supabase", "APIs REST"]}
          />
          <TechCard
            title={t.stack.tools}
            items={["Git", "GitHub", "Linux", "VS Code", "Hardware"]}
          />
        </div>
      </section>


      {/* PROJETOS (GITHUB API) */}
      <section id="projects" className="container" style={{ paddingTop: 0 }}>
        <AnimateOnScroll>
          <h2 className="section-title">{t.projects.title}</h2>
        </AnimateOnScroll>
        <div className="grid-2">
          {loading ? (
            <p style={{ textAlign: "center", width: "100%", gridColumn: "1 / -1" }}>Carregando projetos...</p>
          ) : (
            projects.map((repo) => (
              <ProjectCard
                key={repo.id}
                title={repo.name}
                description={repo.description}
                tech={repo.topics.join(' · ') || "GitHub Repo"}
                github={repo.html_url}
                demo={repo.homepage || undefined}
              />
            ))
          )}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container" style={{ paddingTop: 0 }}>
        <AnimateOnScroll>
          <h2 className="section-title">{t.features.title}</h2>
          <ul className="features-list">
            {[t.features.f1, t.features.f2, t.features.f3, t.features.f4, t.features.f5].map((feature, i) => (
              <li key={i} className="feature-item">
                <CheckCircle2 className="feature-icon" size={24} />
                <span className="feature-text">{feature}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>
      </section>

      {/* CONTATO */}
      <section id="contact" className="container" style={{ paddingTop: 0, paddingBottom: "6rem" }}>
        <AnimateOnScroll>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>{t.contact.title}</h2>
          <p className="section-subtitle" style={{ marginTop: 0, marginBottom: "3rem" }}>
            {t.contact.subtitle}
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem", maxWidth: "600px", margin: "0 auto" }}>
            <div className="socials" style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
              <a href="https://github.com/VictorMussoline" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/victormussoline/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <Linkedin size={28} />
              </a>
              <a href="mailto:victor8augusto010604@hotmail.com" className="social-btn" aria-label="Email">
                <Mail size={28} />
              </a>
            </div>
            
            <div className="card" style={{ width: "100%" }}>
              <ContactForm />
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Victor Mussoline. {t.footer.rights}
      </footer>
    </>
  );
}
