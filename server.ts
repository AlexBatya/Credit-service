const express = require('express')
const path = require('path')
const color = require('colors');
const app = express();

const file = (files:string)=>{
    return `../views/pages/${files}.ejs`
}

app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'static')))
app.set('view angin','ejs')

const mainLink = require('./routers/CreditText.js')
app.use(mainLink)

app.get('/',(req: any, res: any)=>{
    res.render(file('main'),req.russian)
})

app.listen(3000,()=>{
    console.log(color.green('Сервер запущен, батеньки...'));
})
