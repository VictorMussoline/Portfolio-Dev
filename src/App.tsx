import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import "./App.css";

import { AnimateOnScroll } from "./components/AnimateOnScroll";
import { TechCard } from "./components/TechCard";
import { ProjectCard } from "./components/ProjectCard";

export default function Portfolio() {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopyEmail = () => {
    const email = 'victor8augusto010604@hotmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess('Email copiado!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, (err) => {
      console.error('Falha ao copiar o email: ', err);
      setCopySuccess('Falha ao copiar.');
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">

      {/* HERO */}
      <section className="hero">
        <h1>
          Olá, eu sou <span>Victor</span> 👋
        </h1>
        <p>Desenvolvedor Full Stack focado em criar aplicações web modernas.</p>

        <div className="buttons">
          <a className="btn-primary" href="#projects">
            Ver Projetos
          </a>
          <a className="btn-outline" href="#contact">
            Entrar em Contato
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <AnimateOnScroll>
        <section className="container text-center">
          <h2 className="text-3xl font-semibold mb-6">Sobre mim</h2>
          <p className="max-w-3xl mx-auto text-zinc-400 leading-relaxed">
            Desenvolvedor Focado em Entregar Resultados (React, Tailwind CSS, JS, Firebase, Java, Node.js, APIs REST)
            <br/><br/>
            
            Minha experiência é voltada para a criação de soluções web performáticas e intuitivas, com foco em métricas de negócio e performance técnica.
            <br/><br/>

            Sou o criador do FinControl, um app de gestão financeira onde React e Tailwind CSS formaram o Front-End de alto desempenho funcionando sem travamentos e com muita fluidez. Utilizei JavaScript Puro para lógica otimizada e Firebase como database escalável.
            <br/><br/>
            
            Destaques de Entrega no FinControl:
            <br/><br/>

            Performance: Otimização de componentes React que reduziu o tempo de carregamento inicial em até 35%.
            <br/><br/>

            Engajamento: Design intuitivo com Tailwind CSS que levou a um aumento de 17% no desempenho de uso diário do aplicativo.
            <br/><br/>

            Escalabilidade: Arquitetura de dados no Firebase que suporta em torno de 100.000 usuários e milhares de registros com estabilidade.
            <br/><br/>

            Disponível para desafios que exigem proficiência em todo o ciclo de vida do produto e uma mentalidade orientada a resultados.
          </p>
        </section>
      </AnimateOnScroll>

      {/* STACK */}
      <section className="bg-zinc-900">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center">Stack Tecnológica</h2>
          
          <div className="grid">
            <TechCard
              title="Front-End"
              items={["HTML", "CSS", "JavaScript", "React"]}
            />
            <TechCard
              title="Back-End"
              items={["Java", "Node.js", "Firebase", "APIs REST"]}
            />
            <TechCard
              title="Ferramentas"
              items={["Git", "GitHub", "Linux", "VS Code"]}
            />
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <AnimateOnScroll>
        <section id="projects" className="container">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="FinControl"
              description="Controle financeiro com autenticação e dados em tempo real."
              tech="ReactJS · Firebase · TailwindCSS"
              github="https://github.com/VictorMussoline/FinControl-Open"
              demo="https://fincontrolvm.web.app/login"
            />
            <br/>
            <ProjectCard
              title="Base de Conhecimento de Games Retrô"
              description="Projeto feito na imersão da Alura usando IA."
              tech="HTML · Google Gemini · Google API"
              github="https://github.com/VictorMussoline/imersao-dev-alura-10"
              demo="https://victormussoline.github.io/imersao-dev-alura-10/"
            />
            <br/>
            <ProjectCard
              title="Portfólio Fotográfico"
              description="Em breve."
              tech="ReactJS · JavaScript Puro · TailwindCSS"
              github="https://github.com/VictorMussoline"
            />
          </div>
        </section>
      </AnimateOnScroll>

      {/* DIFERENCIAIS */}
      <AnimateOnScroll>
        <section className="bg-zinc-900">
          <div className="container">
            <h2 className="text-3xl font-semibold mb-8 text-center">Diferenciais</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-zinc-400 list-none">
              <li className="flex items-center gap-2"> Desenvolvimento full-stack com foco em aplicações funcionais, organizadas e de fácil manutenção</li>
              <li className="flex items-center gap-2"> Experiência prática com projetos reais, utilizando Git, GitHub e versionamento de código</li>
              <li className="flex items-center gap-2"> Criação de interfaces utilizando JavaScript moderno e React, com componentização e reutilização de código</li>
              <li className="flex items-center gap-2"> Atenção à experiência do usuário (UX), aplicando boas práticas de usabilidade e feedback visual</li>
              <li className="flex items-center gap-2"> Capacidade de análise e resolução de problemas, com abordagem orientada a soluções</li>
              <li className="flex items-center gap-2"> Código estruturado seguindo boas práticas, padrões de projeto e legibilidade</li>
              <li className="flex items-center gap-2"> Background técnico em suporte e manutenção, trazendo visão prática dos problemas enfrentados por usuários finais</li>
            </ul>
          </div>
        </section>
      </AnimateOnScroll>

      {/* CONTATO */}
      <AnimateOnScroll>
        <section id="contact" className="container text-center">
          <h2 className="text-3xl font-semibold mb-6">Vamos conversar?</h2>
          <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
            Aberto a oportunidades e novos projetos. Sinta-se à vontade para entrar em contato.
          </p>
          <br/>
          <div className="socials">
            <a href="https://github.com/VictorMussoline" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
              <Github size={30} />
            </a>
            <a href="https://www.linkedin.com/in/victormussoline/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
              <Linkedin size={30} />
            </a>
            <button onClick={handleCopyEmail} className="hover:text-indigo-500 transition-colors" aria-label="Copiar email">
              <Mail size={30} />
            </button>
          </div>
          {copySuccess && (
            <p className="mt-4 text-sm text-indigo-400">{copySuccess}</p>
          )}
        </section>
      </AnimateOnScroll>

      <footer className="py-6 text-center text-zinc-600 text-sm bg-zinc-950 border-t border-zinc-900">
        © {new Date().getFullYear()} Victor Mussoline
      </footer>
    </div>
  );
}
