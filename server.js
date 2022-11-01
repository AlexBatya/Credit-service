var express = require('express');
var path = require('path');
var color = require('colors');
var app = express();
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view angin', 'ejs');
var mainLink = require('./routers/CreditText.js');
app.use(mainLink);
app.get('/', function (req, res) {
    req.credit();
});
app.listen(3000, function () {
    console.log(color.green('Сервер запущен, батеньки...'));
});
