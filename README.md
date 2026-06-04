<div align="center">
  <h1 align="center">Premium Full-Stack Developer Portfolio</h1>
  <p align="center">
    Um portfólio moderno, ultrarrápido e altamente interativo com micro-animações, PWA e integração ao GitHub.
    <br />
    <br />
    <a href="https://victormussoline.vercel.app">Visualizar Demo</a>
    ·
    <a href="https://github.com/VictorMussoline/portfolio-vercel/issues">Reportar Bug</a>
  </p>
</div>

---

<div align="center">
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![tsParticles](https://img.shields.io/badge/tsParticles-1A1A1A?style=for-the-badge&logo=javascript&logoColor=white)](https://particles.js.org/)

</div>

## 🚀 Visão Geral

Este projeto é um portfólio desenvolvido com as tecnologias mais modernas do mercado, focado em **alta performance**, **Design Premium** e **Experiência de Usuário (UX)**. 

Criado com **React**, **TypeScript** e **Vite**, o projeto não é apenas um site estático, mas sim uma PWA (Progressive Web App) completa, com física de animações avançada e comunicação dinâmica com APIs reais.

### ✨ Funcionalidades Premium

- 🌐 **Internacionalização (i18n):** Suporte nativo para Português (PT) e Inglês (EN) gerenciado por Context API.
- 🧲 **Botões Magnéticos (Magnetic UI):** Física avançada com `framer-motion` que atrai botões e links sutilmente para o cursor do usuário.
- 📐 **Tilt 3D Holográfico:** Cards de tecnologias e diferenciais que reagem à posição do mouse, criando uma ilusão incrível de profundidade espacial (`react-parallax-tilt`).
- 🌈 **Razer Chroma RGB:** Efeito dinâmico desenhado puro em CSS com atrasos matemáticos para criar um hover vibrante e gamificado em elementos chave.
- 🔄 **Integração Real com GitHub:** Os projetos são carregados dinamicamente da API pública do GitHub, exibindo estrelas e repositórios atualizados (com tratamento para evitar limite de *rate*).
- 💀 **Skeleton Loaders:** Efeito Shimmer de alta qualidade enquanto os dados do servidor não chegam (CLS zero).
- 🔔 **Toast Notifications (Sonner):** Feedbacks visuais premium inspirados no ecossistema Vercel.
- ⚡ **PWA Ready:** Suporte offline e manifesto configurado para ser instalado nativamente no desktop e mobile.

## 🛠 Tecnologias e Arquitetura

O ecossistema do projeto foi escolhido visando a máxima eficiência no *bundle size* final e legibilidade de código (totalmente tipado e documentado via JSDoc):

- **Core:** React 18, TypeScript
- **Build Tool & Bundler:** Vite 
- **Styling:** CSS3 Avançado (Variáveis Nativas, Keyframes, Flexbox/Grid, Glassmorphism)
- **Animações e Física:** Framer Motion, react-parallax-tilt, tsParticles
- **Ícones:** Lucide React
- **Deploy:** Vercel (Pronto para CI/CD)

## 💻 Como Rodar Localmente

Siga o passo-a-passo abaixo para testar este projeto no seu ambiente local:

### 1. Pré-requisitos
- Node.js (v18 ou superior recomendado)
- NPM, Yarn ou pnpm

### 2. Clonando e Instalando
```bash
# Clone o repositório
git clone https://github.com/VictorMussoline/portfolio-vercel.git

# Entre na pasta
cd portfolio-vercel

# Instale as dependências
npm install
```

### 3. Configurando as Variáveis de Ambiente
O projeto precisa do seu usuário do GitHub para buscar os projetos.
- Faça uma cópia do arquivo `.env.example` e renomeie para `.env`.
- Insira as suas informações:
```env
VITE_GITHUB_USERNAME=SeuUsuarioDoGithub
VITE_GITHUB_TOKEN=seu_token_opcional
```
> **Nota:** O `VITE_GITHUB_TOKEN` é opcional, mas evita que você caia no limite de taxa de requisições do GitHub (Rate Limit).

### 4. Executando o Servidor de Desenvolvimento
```bash
npm run dev
```
O projeto estará rodando magicamente na sua máquina na porta `http://localhost:5173`. 🪄

## 🤝 Contribuindo
Sinta-se livre para clonar, modificar, ou usar como base para o seu próprio portfólio. Se você melhorar algo estrutural, mande um Pull Request!

---
Desenvolvido com ☕ e muito código por **[Victor Mussoline](https://github.com/VictorMussoline)**.
