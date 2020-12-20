const http = require('http');
const Counter = require('./Counter');
const serveFile = require('./serveFile');

const PORT = 3000;

const counter = new Counter();

const requestListener = function (req, res) {
  const { url, method } = req;
  switch (url) {
    case '/':
      res.writeHead(302, { 'Location': '/index.html' });
      return res.end();
    case '/counter':
      switch (method) {
        case 'GET':
          return res.end(JSON.stringify({ value: counter.value }));
        case 'POST':
          counter.increment();
          return res.end(JSON.stringify({ value: counter.value }));
      }
    default:
      return serveFile(res, url);
  }
};

const server = http.createServer(requestListener);
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log(counter.printLog())
});
