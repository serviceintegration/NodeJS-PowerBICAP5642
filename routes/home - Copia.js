module.exports = function (app) {

    // home page
    //app.get('/', function (req, res) {
    //res.render("/html/index.html", { title: 'Home Page.  ' })
    //res.write('Hello from Ruth\n')
    //    res.sendFile("src/index2.html");
    //});

    var http = require('http');
    var fs = require('fs');

    function onRequest(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./index2.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    }

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', {
            title: 'Chat with Me!  '
        })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', {
            title: 'About Me.  '
        })
    });
}