import { useState, useEffect } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[] | string;
  github: string;
  demo?: string;
  image?: string;
  images?: string[];
  featured?: boolean;
  featuredLabel?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  image,
  images,
  featured,
  featuredLabel = "Destaque"
}: ProjectCardProps) {
  const techList = Array.isArray(tech) ? tech : tech.split(" · ");
  const imageList = images && images.length > 0 ? images : image ? [image] : [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play slideshow every 0.7s when hovered
  useEffect(() => {
    if (!isHovered || imageList.length <= 1) {
      setCurrentIdx(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % imageList.length);
    }, 1100);

    return () => clearInterval(interval);
  }, [isHovered, imageList.length]);

  return (
    <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.015} transitionSpeed={2000} className="project-card-tilt">
      <div
        className={`card project-card ${featured ? "project-card-featured" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Mockup Preview Frame */}
        <div className="project-preview-frame">
          <div className="project-browser-bar">
            <div className="browser-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="browser-url">{demo || github}</div>
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
                  initial={{ opacity: 0.65, scale: 1.03 }}
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

            {/* Hover Auto-play indicator dots */}
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
          <p className="project-desc">{description}</p>

          <div className="project-tech-tags">
            {techList.map((item, idx) => (
              <span key={idx} className="project-tech-tag">{item}</span>
            ))}
          </div>

          <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Repositório GitHub">
              <Github size={16} /> Code
            </a>
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link-btn project-link-demo" aria-label="Demonstração Ao Vivo">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
