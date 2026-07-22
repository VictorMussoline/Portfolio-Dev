import { Github, Linkedin, Mail, Globe, Download, Layers, MessageCircle, Database, Zap, Smartphone, RefreshCw } from "lucide-react";
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
import { MagneticElement } from "./components/MagneticElement";
import { ProjectSkeleton } from "./components/ProjectSkeleton";
import Tilt from "react-parallax-tilt";

const FEATURE_ICONS = [Layers, MessageCircle, Database, Zap, Smartphone, RefreshCw];

/**
 * Main Application Component
 * Integrates all sections (Hero, About, Stack, Projects, Contact)
 * and manages global states like i18n, GitHub projects fetch, and parallax animations.
 */
export default function Portfolio() {
  const { t, lang, toggleLang } = useI18n();
  // Fetch repositories from GitHub API dynamically
  const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || "VictorMussoline";
  const { projects, loading } = useGitHubProjects(githubUsername);
  
  // Parallax effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <>
      <CustomCursor />
      <ParticlesBackground />

      <div style={{ position: "fixed", top: "1.5rem", right: "2rem", zIndex: 100 }}>
        <MagneticElement>
          <button 
            onClick={toggleLang}
            className="btn-outline"
            style={{ padding: "0.5rem 1rem", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Globe size={16} /> {lang === "pt" ? "EN" : "PT"}
          </button>
        </MagneticElement>
      </div>

      {/* HERO SECTION COM PARALLAX */}
      <section className="hero-wrapper">
        <motion.div className="hero-content" style={{ y: y1 }}>
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge-dot"></span> {t.hero.badge}
          </motion.div>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.titleStart}
            <span className="highlight">{t.hero.titleHighlight1}</span>
            {t.hero.titleMid}
            <span className="highlight">{t.hero.titleHighlight2}</span>
            {t.hero.titleEnd}
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
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticElement>
              <a className="btn-primary" href="#projects">
                {t.hero.btnProjects}
              </a>
            </MagneticElement>
            <MagneticElement>
              <a className="btn-outline" href="#contact">
                {t.hero.btnContact}
              </a>
            </MagneticElement>
            <MagneticElement>
              <a className="btn-outline" href="/cv.pdf" download="Victor_Mussoline_Curriculo.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Download size={18} /> {t.hero.btnCV}
              </a>
            </MagneticElement>
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
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <TechCard
              title={t.stack.frontend}
              items={["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind"]}
            />
          </Tilt>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <TechCard
              title={t.stack.backend}
              items={["Java", "Node.js", "Python", "Firebase", "Supabase", "APIs REST"]}
            />
          </Tilt>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <TechCard
              title={t.stack.tools}
              items={["Git", "GitHub", "Linux", "VS Code", "Hardware"]}
            />
          </Tilt>
        </div>
      </section>


      {/* PROJETOS (GITHUB API) */}
      <section id="projects" className="container" style={{ paddingTop: 0 }}>
        <AnimateOnScroll>
          <h2 className="section-title">{t.projects.title}</h2>
        </AnimateOnScroll>
        <div className="grid-2">
          {loading ? (
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
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
            {t.features.list.map((feature: any, i: number) => {
              const Icon = FEATURE_ICONS[i] || Layers;
              return (
                <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                  <li className="feature-item" style={{ flexDirection: "column", gap: "1rem", height: "100%" }}>
                    <Icon className="feature-icon" size={36} />
                    <div>
                      <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>{feature.title}</h3>
                      <p className="feature-text">{feature.text}</p>
                    </div>
                  </li>
                </Tilt>
              );
            })}
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
              <MagneticElement>
                <a href="https://github.com/VictorMussoline" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                  <Github size={28} />
                </a>
              </MagneticElement>
              <MagneticElement>
                <a href="https://www.linkedin.com/in/victormussoline/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <Linkedin size={28} />
                </a>
              </MagneticElement>
              <MagneticElement>
                <a href="mailto:victor8augusto010604@hotmail.com" className="social-btn" aria-label="Email">
                  <Mail size={28} />
                </a>
              </MagneticElement>
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
