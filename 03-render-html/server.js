var http = require('http');
var fs = require('fs');

function onRequest(require, response) {
    response.writeHead(200, { 'Context-Type': 'text/plain' });
    fs.readFile('./index.html', null, function (err, data) { 
        if (err) {
            response.writeHead(404);
            response.write('File not foung');
        } else {
            response.write(data);
        }
        response.end();
    });
}
http.createServer(onRequest).listen(8000);