const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

http.createServer((req, res) => {
  proxy.web(req, res, { target: process.env.PROXY_URL });
}).listen(process.env.PORT || 3000);
