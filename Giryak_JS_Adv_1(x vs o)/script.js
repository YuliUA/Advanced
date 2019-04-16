
let game = {
    counter: 0,cellArr: $('.cell'),
    playArea:[],
    winner:'',
    
    startGame: function () {
        $('.cell').on('click', (e) => {
            this.counter++;
            this.playArea.length=9;
            let item = e.target
            if ($(item).hasClass('o') == false && $(item).hasClass('x') == false) {
                if (this.counter % 2 == 0) {
                    $(item).addClass('o')
                    this.playArea.splice($('.cell').index(item),1,'o')
                    $('.girl').removeClass('hide')
                    $('.boy').addClass('hide')
                    console.log(this.playArea)
                } else {
                    $(item).addClass('x')
                    this.playArea.splice($('.cell').index(item),1,'x')
                    $('.boy').removeClass('hide')
                    $('.girl').addClass('hide')
                    console.log(this.playArea)
                }
            } else {
                this.counter--;
            }
            if (this.counter>4) {
                game.checkWinner()
                game.showWinner()
            }
        })
    },
    checkWinner: function () {
        for(let i=0;i<this.playArea.length;i++){
            if(this.playArea[0]==this.playArea[1] && this.playArea[0]==this.playArea[2]){
                this.winner=this.playArea[0]
                break;
            }else if(this.playArea[3]==this.playArea[4] && this.playArea[3]==this.playArea[5]){
                this.winner=this.playArea[3]
                break;
            }else if(this.playArea[6]==this.playArea[7] && this.playArea[6]==this.playArea[8]){
                this.winner=this.playArea[6]
                break;
            }else if(this.playArea[0]==this.playArea[4] && this.playArea[0]==this.playArea[8]){
                this.winner=this.playArea[0]
                break;
            }else if(this.playArea[2]==this.playArea[4] && this.playArea[2]==this.playArea[6]){
                this.winner=this.playArea[2]
                break;
            }else if(this.playArea[0]==this.playArea[3] && this.playArea[0]==this.playArea[6]){
                this.winner=this.playArea[0]
                break;
            }else if(this.playArea[1]==this.playArea[4] && this.playArea[1]==this.playArea[7]){
                this.winner=this.playArea[1]
                break;
            }else if(this.playArea[2]==this.playArea[5] && this.playArea[2]==this.playArea[8]){
                this.winner=this.playArea[2]
                break;
            }
        }
    },
    showWinner: function(){
        if(this.winner==='x'){
            $('.girl').removeClass('hide')
            $('.boy').addClass('hide')
            $('.girl>span').text('Girls are the best!!!')
            alert('The winner is X')
        }else if(this.winner==='o'){
            $('.boy').removeClass('hide')
            $('.girl').addClass('hide')
            $('.boy>span').text('Boys are the best!!!')
            alert('The winner is O')
        }
    }
}
game.startGame()