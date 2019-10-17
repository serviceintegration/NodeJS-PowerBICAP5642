module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        //res.sendFile('./index.html', { title: 'Home Page.  ' })
        res.send("teste",{ title: 'Home Page.  ' })
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
