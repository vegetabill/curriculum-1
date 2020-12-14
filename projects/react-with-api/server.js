const http = require('http');
const fs = require('fs').promises;
const PORT = 3000;

function serveFile(res, filename, type) {
  console.log(`[200] serving ${filename}`);
  return fs.readFile(filename).then((contents) => {
    if (type) {
      res.setHeader('Content-Type', type);
    }
    res.writeHead(200);
    res.end(contents);
  });
}

const requestListener = function (req, res) {
  const { url } = req;
  switch (url) {
    case '/':
    case '/index.html':
      return serveFile(res, './index.html', 'text/html');
    case '/components.jsx':
      return serveFile(res, './components.jsx', 'text/jsx')
    default:
      console.warn(`[404] Not found: ${url}`)
      res.writeHead(404);
      res.end('Not Found\n');
  }
};

const server = http.createServer(requestListener);
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
