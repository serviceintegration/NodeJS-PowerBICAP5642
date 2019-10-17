module.exports = function (app) {
    const express = require('express'),
        es6Renderer = require('express-es6-template-engine'),
        app = express();

    app.engine('html', es6Renderer);
    app.set('views', 'views');
    app.set('view engine', 'html');

    app.get('/', function (req, res) {
        res.render('index', {
            locals: {
                title: 'Welcome!'
            }
        });
    });

    app.listen(3000);

}