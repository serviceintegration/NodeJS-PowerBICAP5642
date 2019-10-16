module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        //res.render("/html/index.html", { title: 'Home Page.  ' })
        //res.write('Hello from Ruth\n')
        res.sendFile(__dirname + "/src/index.html");
    });

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Chat with Me!  ' })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });
}
