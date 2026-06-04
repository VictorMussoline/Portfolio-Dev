import { Github, ExternalLink } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo?: string;
}

export function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <AnimateOnScroll>
      <div className="card project">
        <div>
          <h3>{title}</h3>
          <span className="project-tech">{tech}</span>
          <p>{description}</p>
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
            <Github size={18} /> GitHub
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
              <ExternalLink size={18} /> Demo
            </a>
          )}
        </div>
      </div>
    </AnimateOnScroll>
  );
}
