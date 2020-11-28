var http = require('http');

function onRequest(require, response) {
    response.writeHead(200, { 'Context-Type': 'text/plain' });
    response.write('Hello world');
    response.end();
}
http.createServer(onRequest).listen(8000);