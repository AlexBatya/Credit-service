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
    // res.render(file('main'),{
    //     title: 'mainLink',
    //     sizeCredit: 'Кредит от 1000 до 250 000 р',
    //     num1: 18,
    //     num2: 99 + '%',
    //     num3: '2:00',
    //     textCond1: 'Минимальный возраст заемщика', 
    //     textCond2: 'Вероятность получения кредита',
    //     textCond3: 'Минуты на получение денег',
    //     promotionalRate: 0,
    //     advertisementCredit: 'Успей оставить заявку и получи кредит под 0% годовых',
    //     timeday: '00',
    //     timehours: 23,
    //     timeminuts: 54,
    //     timeseconds: 22
    // })
});
app.listen(3000, function () {
    console.log(color.green('Сервер запущен, батеньки...'));
});
