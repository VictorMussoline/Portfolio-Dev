import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n/Context'
import { Toaster } from "sonner";

// WebMCP Support for AI Agents
if (typeof window !== 'undefined') {
  const registerWebMcp = () => {
    const nav = navigator as any;
    if (nav?.modelContext) {
      const tools = [
        {
          name: "get_contact_info",
          description: "Get Victor Mussoline's contact information and social links",
          inputSchema: {
            type: "object",
            properties: {}
          },
          execute: async () => ({
            email: "victor8augusto010604@hotmail.com",
            github: "https://github.com/VictorMussoline",
            linkedin: "https://www.linkedin.com/in/victormussoline/"
          })
        },
        {
          name: "get_portfolio_summary",
          description: "Get summary of Victor Mussoline's background, role, and main projects",
          inputSchema: {
            type: "object",
            properties: {}
          },
          execute: async () => ({
            role: "Full Stack Developer, Technician & Photographer",
            location: "Brazil",
            focus: "React, Node.js, TypeScript, Full Stack Architecture"
          })
        }
      ];

      if (typeof nav.modelContext.provideContext === 'function') {
        nav.modelContext.provideContext({ tools });
      }
      if (typeof nav.modelContext.registerTool === 'function') {
        for (const tool of tools) {
          try {
            nav.modelContext.registerTool(tool);
          } catch {
            // Ignore duplicate/unsupported tool registration
          }
        }
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerWebMcp);
  } else {
    registerWebMcp();
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <Toaster theme="dark" position="bottom-right" />
      <App />
    </I18nProvider>
  </StrictMode>,
)

