
class Box {
    constructor() {
        this.figure = function () {
            let randNum = Math.random().toFixed(0);
            if (randNum == 1) {
                return (`<div class="box" style="background:${this.color()}"></div>`);
            }
            else {
                return (`<div class="box ball" style="background:${this.color()}"></div>`);
            }
        },
        this.color = function () {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let color = `rgb(${r},${g},${b})`;
            return color;
        }
    }
}
$('.board').on('click', () => {
    var box = new Box()
    for (let i = 1; i <= 3; i++) {
        setTimeout(()=>{
            $('.board').append(box.figure())
        },i*200)
    }
})

setInterval(() => {
    let width = $('.board').width()
    let height = $('.board').height()
    let box = new Box()
    
    $('.box').animate({
        top: `${Math.floor(Math.random() * width)}px`,
        left: `${Math.floor(Math.random() * height)}px`
    }, 2000, 'linear',()=>{
        $('.box').each((i,elem)=>{
            $(elem).css('background',`${box.color()}`)
        })
    })
}, 200)
