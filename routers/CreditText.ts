import { nextTick } from "process";

const express1 = require('express');
const router1 = express1.Router();

const file = (fileName: string)=>{
    return `../views/pages/${fileName}.ejs`
}

module.exports = router1.get('/',(req: any, res: any, next: any)=>{
    req.russian = {
        partners: 'Партнёры',
        schemeOfWork: 'Схема работы',
        reviews: 'Отзывы',
        quastionAnswer: 'Вопросы - ответы',
        CreditConditions: 'Условия кредитования',
        onlineWithout: 'Онлайн без поправок!',
        sizeCredit: 'Кредит от 1000 до 250 000 р',
        textCond1: 'Минимальный возраст заемщика', 
        textCond2: 'Вероятность получения кредита',
        textCond3: 'Минуты на получение денег',
        advertisementCredit: 'Успей оставить заявку и получи кредит под 0% годовых',
        PromotionalRate: 'Акционная ставка',
        days: 'Дней' ,
        hours: "Часов",
        minutes: "Минут",
        seconds: "Секунд",
        arrangeButton: 'Оформить кредит',
        ourPartners: 'Наши партнёры',
        SchemeOfWork: 'Схема работы',
        onlineApli: 'Заполните онлайн-заявку на нашем сайте',
        answerTheQuation: 'Отвечаете на звонок в течение 10 минут',
        getCredit: 'Получаете кредит или кредитную карту',
        whyUs: 'Почему мы'
    } 
    req.english = {
        partners: 'Credit conditions',
        schemeOfWork: 'Scheme of work',
        reviews: 'Reviews',
        quastionAnswer: 'Questions-answers',
        CreditConditions: 'Credit conditions',
        sizeCredit: 'Loan from 17 to 4200 $ ',
        onlineWithout: 'Online without checks!',
        textCond1: 'Minimum age of the borrower', 
        textCond2: 'The probability of obtaining a loan',
        textCond3: 'Minutes to receive money',
        advertisementCredit: 'Have time to submit an application and get a loan at 0% per annum',
        PromotionalRate: 'Promotional rate',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        arrangeButton: 'Apply for a loan',
        ourPartners: 'Our portners',
        SchemeOfWork: 'Scheme of work',
        onlineApli: 'Fill out the online application on our website',
        answerTheQuation: 'Answer the call within 10 minutes',
        getCredit: 'Get a loan or credit card',
        whyUs: 'Why we'
    }
    next();
})