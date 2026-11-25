import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Sparkles, Lock, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  summary?: string;
  tech: string[] | string;
  github?: string;
  demo?: string;
  image?: string;
  images?: string[];
  featured?: boolean;
  featuredLabel?: string;
  demoLabel?: string;
  appStoreUrl?: string;
  appStoreLabel?: string;
  ctaLabel?: string;
  isPlayStore?: boolean;
  onSelect?: () => void;
}

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" width="14" height="14" style={{ flexShrink: 0, overflow: "visible", ...props.style }} {...props}>
    <path d="M32.5 12C30 14.5 28.5 18.5 28.5 23.5V488.5C28.5 493.5 30 497.5 32.5 500L35 502.5L259.5 278V234L35 9.5L32.5 12Z" fill="#00c3ff"/>
    <path d="M338 350.5L259.5 278V234L338 161.5L340.5 163L429.5 213.5C455 228 455 251.5 429.5 266L340.5 316.5L338 350.5Z" fill="#ffca00"/>
    <path d="M35 502.5L259.5 278L338 350.5L35 502.5Z" fill="#ff3c51"/>
    <path d="M35 9.5L338 161.5L259.5 278L35 9.5Z" fill="#00f076"/>
  </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor" style={{ flexShrink: 0, ...props.style }} {...props}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export function ProjectCard({ 
  title, 
  description, 
  tech, 
  github, 
  demo, 
  image,
  images,
  featured,
  featuredLabel = "Destaque",
  summary,
  demoLabel,
  appStoreUrl,
  appStoreLabel,
  ctaLabel = "Clique para ver detalhes",
  isPlayStore,
  onSelect
}: ProjectCardProps) {
  const techList = Array.isArray(tech) ? tech : tech.split(" · ");
  const visibleTechList = techList.slice(0, 5);
  const imageList = images && images.length > 0 ? images : image ? [image] : [];
  const cardSummary = summary || description;
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileCenter, setIsMobileCenter] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  // Mobile Center Viewport Intersection Detection using IntersectionObserver
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth <= 850);
    };

    window.addEventListener("resize", checkMobile, { passive: true });
    checkMobile();

    if (!cardRef.current) {
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isMobile = window.innerWidth <= 850;
        setIsMobileCenter(isMobile && entry.isIntersecting);
      },
      {
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0
      }
    );

    observer.observe(cardRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  const activeHover = isHovered || isMobileCenter;

  // Auto-play slideshow every 1.1s when hovered OR centered on mobile
  useEffect(() => {
    if (!activeHover || imageList.length <= 1) {
      setCurrentIdx(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % imageList.length);
    }, 1100);

    return () => clearInterval(interval);
  }, [activeHover, imageList.length]);

  const cardInner = (
    <div 
      ref={cardRef}
      className={`card project-card ${featured ? "project-card-featured" : ""} ${activeHover ? "is-hovered" : ""} ${onSelect ? "project-card-clickable" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={onSelect ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelect(); } } : undefined}
    >
      {/* Mockup Preview Frame */}
      <div className="project-preview-frame">
        <div className="project-browser-bar">
          <div className="browser-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="browser-url">{demo || github || "Closed Source"}</div>
          {imageList.length > 1 && (
            <span className="carousel-counter">{currentIdx + 1} / {imageList.length}</span>
          )}
        </div>
        
        <div className="project-img-container">
          {imageList.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIdx}
                src={imageList[currentIdx]}
                alt={`${title} print ${currentIdx + 1}`}
                className="project-img"
                initial={{ opacity: 0.65, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.65 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
          ) : (
            <div className="project-placeholder-bg">
              <span className="project-placeholder-title">{title}</span>
            </div>
          )}
          <div className="project-img-overlay"></div>
          
          {featured && (
            <span className="project-badge">
              <Sparkles size={12} /> {featuredLabel}
            </span>
          )}

          {/* Hover / Mobile Center Auto-play indicator dots */}
          {imageList.length > 1 && (
            <div className="carousel-hover-indicator">
              {imageList.map((_, i) => (
                <span
                  key={i}
                  className={`carousel-hover-dot ${i === currentIdx ? "active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{cardSummary}</p>

        <div className="project-card-cta" aria-hidden="true">
          <span>{ctaLabel}</span>
          <ChevronRight size={14} />
        </div>

        <div className="project-tech-tags">
          {visibleTechList.map((item, idx) => (
            <span key={idx} className="project-tech-tag">{item}</span>
          ))}
        </div>

        <div className="project-links" onClick={(e) => e.stopPropagation()}>
          {github ? (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Repositório GitHub">
              <Github size={16} /> Code
            </a>
          ) : (
            <button className="project-link-btn project-link-btn-locked" disabled aria-label="Código Fechado">
              <Lock size={14} style={{ color: "#ef4444" }} /> Code
            </button>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-demo" aria-label={demoLabel || "Demonstração Ao Vivo"} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              {isPlayStore ? <PlayStoreIcon style={{ width: 14, height: 14 }} /> : <ExternalLink size={16} />} {demoLabel || "Live Demo"}
            </a>
          )}
          {appStoreUrl && (
            <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-demo" aria-label={appStoreLabel || "App Store"} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              <AppleIcon style={{ width: 14, height: 14 }} /> {appStoreLabel || "App Store"}
            </a>
          )}
        </div>
      </div>
    </div>
  );

  if (isMobileScreen) {
    return (
      <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box", overflow: "hidden" }}>
        {cardInner}
      </div>
    );
  }

  return (
    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.015} transitionSpeed={2000} className="project-card-tilt">
      {cardInner}
    </Tilt>
  );
}
