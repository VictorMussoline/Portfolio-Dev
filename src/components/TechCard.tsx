import { AnimateOnScroll } from "./AnimateOnScroll";

interface TechCardProps {
  title: string;
  items: string[];
}

const techIcons: Record<string, string> = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "Node.js": "https://nodejs.org/static/logos/nodejsStackedLight.svg",
  Python: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  "APIs REST": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub: "https://img.icons8.com/ios11/512/FFFFFF/github.png",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", 
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  Supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  Hardware: "https://img.icons8.com/ios/512/FFFFFF/wrench.png"
};

export function TechCard({ title, items }: TechCardProps) {
  return (
    <AnimateOnScroll>
      <div className="card">
        <h3 className="tech-card-title">{title}</h3>
        <div className="tech-items-grid">
          {items.map((item) => (
            <div key={item} className="tech-item">
              <img src={techIcons[item]} alt={item} className="tech-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}
