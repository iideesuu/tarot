import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, resolve, sep } from 'node:path'

const root = '/usr/share/nginx/html'
const port = Number(process.env.PORT || 80)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
}

async function resolveFile(urlPath) {
  const pathname = decodeURIComponent((urlPath || '/').split('?')[0])
  const filePath = resolve(root, `.${pathname}`)
  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) return null
  const candidates = [filePath, resolve(filePath, 'index.html'), `${filePath}.html`]
  for (const candidate of candidates) {
    try {
      const info = await stat(candidate)
      if (info.isFile()) return candidate
    } catch {}
  }
  return null
}

createServer(async (request, response) => {
  try {
    const file = await resolveFile(request.url)
    if (!file) {
      response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
      response.end('Not found')
      return
    }
    const content = await readFile(file)
    response.writeHead(200, {
      'content-type': types[extname(file)] || 'application/octet-stream',
      'cache-control': extname(file) === '.html' ? 'no-cache' : 'public, max-age=604800'
    })
    response.end(content)
  } catch {
    response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' })
    response.end('Server error')
  }
}).listen(port, '0.0.0.0', () => console.log(`Tarot site listening on :${port}`))
