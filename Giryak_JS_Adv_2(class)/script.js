function Programmer(education, progrLang, canCode, likeCoffee) {
    this.education = education
    this.progrLang = progrLang
    this.canCode = canCode
    this.likeCoffee = likeCoffee
}

Programmer.prototype.drinkCoffee = function () {
    if (this.canCode == true && this.likeCoffee == true) {
        console.log(`You can write code on ${this.progrLang}  and you drink too much coffee :)`)
    } else if (this.canCode == true && this.likeCoffee == false) {
        console.log(`You can write code on ${this.progrLang}  and you don't like coffee :)`)
    } else {
        console.log("You're not a developer!")
    }
}
Programmer.prototype.setEducation = function(education) {
    this.education = education
}
Programmer.prototype.getEducation = function() {
    return console.log(this.education)
}
function WebDev(framework, canBuildUI){
    this.frame = framework
    this.ui = canBuildUI
}
function BigData(framework, dataA){
    this.frame = framework
    this.dataA = dataA
}
function IosDev(framework,mobiApp){
    this.frame = framework
    this.mobiApp = mobiApp
}

let dev1 = new Programmer('', 'javaScript', true, true)
let dev2 = new Programmer('', 'phyton', false, false)
let dev3 = new Programmer('', 'java', true, false)

WebDev.prototype = dev1
BigData.prototype = dev2
IosDev.prototype = dev3

let Sam = new WebDev('vue.js',true)
let Lola = new BigData ('hadoop',true)
let Andrew = new IosDev('react native',true)

Sam.setEducation('computer science')
Lola.setEducation('data science')
Andrew.setEducation('math science')
Sam.getEducation()
Lola.getEducation()
Andrew.getEducation()
Sam.drinkCoffee()
Lola.drinkCoffee()
Andrew.drinkCoffee()
console.log(Sam.frame)
// Для цього завдання вам необхідно створити наступну ієрархію класів.
// Головний клас – Програміст. Клас повинен містити типові змінні та функції які виконує кожний програміст (мова програмування, писати код, кричати на QA та пити каву). Дизайн ви придумуєте за власним бажанням.
// У вас мають бути 3 класи-нащадки:
// •	Web – розробник: акцентується на розробці сайті та веб-додатків. Придумайте йому властивості та можливості;
// •	Big Data інженер: спеціалізується на розробці систем для обробки велитенських об`ємів даних;
// •	Android / iOS розробник: розробка мобільних додатків;
// Для кожного класу-нащадка у вас повинні бути описані специфічні можливості та параметри притаманні тільки вище зaданим напрямам. Ви можете додати, або змінити існуючі класи за вашим бажання
