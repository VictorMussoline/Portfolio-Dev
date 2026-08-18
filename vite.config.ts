import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'
import path from 'path'

function agentReadyPlugin(): Plugin {
  return {
    name: 'agent-ready-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] || ''
        
        // Link header for homepage
        if (url === '/' || url === '/index.html') {
          res.setHeader('Link', '</.well-known/api-catalog>; rel="api-catalog"')
        }

        // Content-Type for api-catalog
        if (url === '/.well-known/api-catalog') {
          const filePath = path.resolve(__dirname, 'public/.well-known/api-catalog')
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'application/linkset+json')
            res.writeHead(200)
            res.end(fs.readFileSync(filePath))
            return
          }
        }

        // Markdown content negotiation
        const accept = req.headers['accept'] || ''
        if (accept.includes('text/markdown') && (url === '/' || url === '/index.html')) {
          const mdContent = `# Victor Mussoline | Portfolio\n\nFull Stack Developer, Technician and Photographer.\n\n- Projects: https://victormussoline.dev/#projects\n- Contact: victor8augusto010604@hotmail.com\n- GitHub: https://github.com/VictorMussoline\n- LinkedIn: https://www.linkedin.com/in/victormussoline/`
          res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
          res.setHeader('x-markdown-tokens', String(mdContent.split(/\s+/).length))
          res.writeHead(200)
          res.end(mdContent)
          return
        }

        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    agentReadyPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Victor Mussoline Portfolio',
        short_name: 'Victor',
        description: 'Desenvolvedor Full Stack, Técnico e Fotógrafo.',
        theme_color: '#050505',
        background_color: '#050505',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})

