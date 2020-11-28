var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequrest(request, response) {
    response.writeHead(200, { 'Context-Type': 'text/plain' });
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
}
http.createServer(onRequrest).listen(8000);
