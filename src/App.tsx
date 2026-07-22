import { Github, Linkedin, Mail, Download, Layers, MessageCircle, Database, Zap, Smartphone, RefreshCw, GraduationCap, Code2, Server, Sparkles, CheckCircle2, Monitor, Bot, Cloud, Laptop, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

import { useI18n } from "./i18n/Context";
import { useGitHubProjects } from "./hooks/useGitHubProjects";
import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { ProjectCard } from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm";
import { CustomCursor } from "./components/CustomCursor";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { MagneticElement } from "./components/MagneticElement";
import { ProjectSkeleton } from "./components/ProjectSkeleton";
import Tilt from "react-parallax-tilt";

import { Navbar } from "./components/Navbar";

const FEATURE_ICONS = [Layers, MessageCircle, Database, Zap, Smartphone, RefreshCw];
const ABOUT_ICONS = [GraduationCap, Smartphone, Code2, Server, Sparkles, Layers];
const BUILD_ICONS = [Smartphone, Monitor, Zap, Bot, Cloud, Layers];
const TIMELINE_ICONS = [Laptop, Code2, Sparkles, Rocket];

/**
 * Main Application Component
 * Integrates all sections (Navbar, Hero, About, Stack, Projects, Contact)
 * and manages global states like i18n, GitHub projects fetch, and parallax animations.
 */
export default function Portfolio() {
  const { t } = useI18n();
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
      <Navbar />

      {/* HERO SECTION COM PARALLAX */}
      <section id="hero" className="hero-wrapper">
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
      <section id="about" className="container">
        <AnimateOnScroll>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-grid">
            {t.about.highlights.map((item: string, i: number) => {
              const Icon = ABOUT_ICONS[i] || CheckCircle2;
              return (
                <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                  <div className="card about-item-card">
                    <div className="about-icon-wrapper">
                      <Icon size={24} className="about-icon" />
                    </div>
                    <span className="about-item-text">{item}</span>
                  </div>
                </Tilt>
              );
            })}
          </div>
        </AnimateOnScroll>
      </section>

      {/* WHAT I BUILD */}
      <section id="what-i-build" className="container">
        <AnimateOnScroll>
          <h2 className="section-title">{t.whatIBuild.title}</h2>
        </AnimateOnScroll>
        <div className="grid-3">
          {t.whatIBuild.items.map((item: any, i: number) => {
            const Icon = BUILD_ICONS[i] || Smartphone;
            return (
              <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <div className="card build-card">
                  <div className="build-icon-wrapper">
                    <Icon size={28} className="build-icon" />
                  </div>
                  <h3 className="build-card-title">{item.title}</h3>
                  <p className="build-card-desc">{item.description}</p>
                </div>
              </Tilt>
            );
          })}
        </div>
      </section>

      {/* TIMELINE / TRAJETÓRIA */}
      <section id="experience" className="container">
        <AnimateOnScroll>
          <h2 className="section-title">{t.timeline.title}</h2>
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            {t.timeline.items.map((item: any, i: number) => {
              const isLeft = i % 2 === 0;
              const Icon = TIMELINE_ICONS[i] || Rocket;
              return (
                <div key={i} className={`timeline-item ${isLeft ? "timeline-left" : "timeline-right"}`}>
                  <div className="timeline-node"></div>
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="timeline-tilt">
                    <div className="card timeline-content">
                      <div className="timeline-header">
                        <span className="timeline-year">{item.year}</span>
                        <div className="timeline-icon-box">
                          <Icon size={18} className="timeline-icon" />
                        </div>
                      </div>
                      <h3 className="timeline-role">{item.role}</h3>
                      <p className="timeline-desc">{item.description}</p>
                      <div className="timeline-tags">
                        {item.tags?.map((tag: string, idx: number) => (
                          <span key={idx} className="timeline-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Tilt>
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      </section>

      {/* PROJETOS (GITHUB API) */}
      <section id="projects" className="container">
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
      <section className="container">
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
      <section id="contact" className="container" style={{ paddingBottom: "8rem" }}>
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
