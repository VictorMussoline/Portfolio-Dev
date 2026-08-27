import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Lock, Layers } from "lucide-react";
import "./ProjectModal.css";

export interface ProjectModalProps {
  project: {
    id: string;
    name: string;
    description: string;
    topics: string[];
    features?: string[];
    html_url?: string;
    homepage?: string;
    images?: string[];
    featured?: boolean;
    isPlayStore?: boolean;
    demoLabel?: string;
  } | null;
  onClose: () => void;
  labels: {
    close: string;
    overview: string;
    features: string;
    technologies: string;
    viewLive: string;
    viewStore: string;
    viewCode: string;
    closedSource: string;
    gallery: string;
  };
  featuredBadge?: string;
}

const PlayStoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" width="16" height="16" style={{ flexShrink: 0, ...props.style }} {...props}>
    <path d="M32.5 12C30 14.5 28.5 18.5 28.5 23.5V488.5C28.5 493.5 30 497.5 32.5 500L35 502.5L259.5 278V234L35 9.5L32.5 12Z" fill="#00c3ff"/>
    <path d="M338 350.5L259.5 278V234L338 161.5L340.5 163L429.5 213.5C455 228 455 251.5 429.5 266L340.5 316.5L338 350.5Z" fill="#ffca00"/>
    <path d="M35 502.5L259.5 278L338 350.5L35 502.5Z" fill="#ff3c51"/>
    <path d="M35 9.5L338 161.5L259.5 278L35 9.5Z" fill="#00f076"/>
  </svg>
);

export function ProjectModal({ project, onClose, labels, featuredBadge = "Destaque" }: ProjectModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [];
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <motion.div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="project-modal-header">
          <div className="project-modal-title-area">
            <div className="project-modal-badges">
              {project.featured && (
                <span className="project-badge project-modal-badge">
                  <Sparkles size={12} /> {featuredBadge}
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="project-modal-title">
              {project.name}
            </h2>
          </div>

          <button
            className="project-modal-close-btn"
            onClick={onClose}
            aria-label={labels.close}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="project-modal-body">
          {/* Gallery Section */}
          {images.length > 0 && (
            <div className="project-modal-gallery">
              <div className="project-modal-main-image-wrapper">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    src={images[activeImageIdx]}
                    alt={`${project.name} preview ${activeImageIdx + 1}`}
                    className="project-modal-main-image"
                    initial={{ opacity: 0.4, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>

                {hasMultipleImages && (
                  <>
                    <button
                      className="modal-gallery-nav modal-gallery-prev"
                      onClick={handlePrevImage}
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      className="modal-gallery-nav modal-gallery-next"
                      onClick={handleNextImage}
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight size={22} />
                    </button>
                    <div className="modal-gallery-counter">
                      {activeImageIdx + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {hasMultipleImages && (
                <div className="project-modal-thumbnails">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`modal-thumb-btn ${idx === activeImageIdx ? "active" : ""}`}
                      onClick={() => setActiveImageIdx(idx)}
                      aria-label={`Selecionar imagem ${idx + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content Columns */}
          <div className="project-modal-info-grid">
            {/* Left/Main Column: Overview & Features */}
            <div className="project-modal-main-col">
              <div className="project-modal-section">
                <h3 className="project-modal-section-title">
                  <Layers size={16} className="modal-section-icon" /> {labels.overview}
                </h3>
                <p className="project-modal-description">{project.description}</p>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="project-modal-section">
                  <h3 className="project-modal-section-title">
                    <Sparkles size={16} className="modal-section-icon" /> {labels.features}
                  </h3>
                  <ul className="project-modal-features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="project-modal-feature-item">
                        <CheckCircle2 size={16} className="modal-feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right/Side Column: Technologies & Links */}
            <div className="project-modal-side-col">
              <div className="project-modal-section">
                <h3 className="project-modal-section-title">{labels.technologies}</h3>
                <div className="project-modal-tech-tags">
                  {project.topics.map((tag, idx) => (
                    <span key={idx} className="project-tech-tag modal-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Action Links Box */}
              <div className="project-modal-actions-box">
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-action-btn modal-action-primary"
                  >
                    {project.isPlayStore ? <PlayStoreIcon /> : <ExternalLink size={16} />}
                    {project.isPlayStore
                      ? project.demoLabel || labels.viewStore
                      : project.demoLabel || labels.viewLive}
                  </a>
                )}

                {project.html_url ? (
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-action-btn modal-action-secondary"
                  >
                    <Github size={16} /> {labels.viewCode}
                  </a>
                ) : (
                  <div className="modal-action-locked">
                    <Lock size={14} style={{ color: "#ef4444" }} />
                    <span>{labels.closedSource}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
