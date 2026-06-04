import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n/Context'
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <Toaster theme="dark" position="bottom-right" />
      <App />
    </I18nProvider>
  </StrictMode>,
)
