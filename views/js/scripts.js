const header = document.querySelector('header');
const biglanguage = document.querySelector('.biglanguage');
const language = header.querySelectorAll('.language');
const footer = document.querySelector('footer');
const blackVertion = footer.querySelector('.blackVertion');
const languageFoot = footer.querySelectorAll('.language')


biglanguage.onclick = (event) =>{
    const target = event.target; 
    language.forEach(elem => {
        if(elem.className.indexOf('languageAdd')){
            elem.classList.remove('languageAdd')
        }
    })
    if(target.className == 'language'){
        target.classList.add('languageAdd')
    }
}

blackVertion.onclick = event =>{
    const target = event.target;
    languageFoot.forEach(elem =>{
        if(elem.className.indexOf('languageFootAdd')){
            elem.classList.remove('languageFootAdd')
        }
    })
    if(target.className == 'language'){
        target.classList.add('languageFootAdd')
    }
}
    






