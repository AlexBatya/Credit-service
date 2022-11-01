import { nextTick } from "process";

const express1 = require('express');
const router1 = express1.Router();

const file = (fileName: string)=>{
    return `../views/pages/${fileName}.ejs`
}

module.exports = router1.get('/',(req: any, res: any, next: any)=>{
    req.credit = ()=>{
        res.render(file(`main`),{
            title: 'mainLink',
            sizeCredit: 'Кредит от 1000 до 250 000 р',
            num1: 18,
            num2: 99 + '%',
            num3: '2:00',
            textCond1: 'Минимальный возраст заемщика', 
            textCond2: 'Вероятность получения кредита',
            textCond3: 'Минуты на получение денег',
            promotionalRate: 0,
            advertisementCredit: 'Успей оставить заявку и получи кредит под 0% годовых',
            timeday: '00',
            timehours: 23,
            timeminuts: 54,
            timeseconds: 22
        })
    }
    next();
})