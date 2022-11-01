const express = require('express')
const path = require('path')
const color = require('colors');
const app = express();



app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'static')))
app.set('view angin','ejs')

const mainLink = require('./routers/CreditText.js')
app.use(mainLink)

app.get('/',(req: any, res: any)=>{
    req.credit(); 
})

app.listen(3000,()=>{
    console.log(color.green('Сервер запущен, батеньки...'));
})
