const { R_OK } = require('fs');
const fs = require('fs').promises;

const MIME_TYPES = {
  jsx: 'text/jsx',
  js: 'application/javascript',
  html: 'text/html',
  css: 'text/css'
}

async function serveFile(res, filename) {
  const path = '.' + filename;
  try {
    await fs.access(path, R_OK);
    const contents = await fs.readFile(path);
    console.log(`[200] serving ${path}`);
    const ext = path.split('.').slice(-1)[0];
    if (ext && MIME_TYPES[ext]) {
      res.setHeader('Content-Type', MIME_TYPES[ext]);
    }
    res.writeHead(200);
    res.end(contents);
  } catch (e) {
    if (e.errno === -2) {
      res.writeHead(404);
      res.end('Not Found');
    }
     res.writeHead(500);
     res.end(`Server Error - ${e.message}`);
  }
}

module.exports = serveFile;
