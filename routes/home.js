module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('../index.html');
    });

    app.get('/script', (req, res) => {
        res.sendFile("./dist/js/vendor.js");
    });

    app.get('/script', (req, res) => {
        res.sendFile("./dist/js/adminx.js");
    });

    app.get('/css', (req, res) => {
        res.sendFile("./dist/css/adminx.css");
    });


    // home page
    //app.get('/', function (req, res) {
    //    res.render('index', {
    //        title: 'Home Page.  '
    //    })
    //});

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