var http = require('http');
var res = require('res');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    res.readFile('index2.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);