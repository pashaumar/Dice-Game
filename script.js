let rollDice = document.querySelector('.roll-dice');
let img = document.getElementById('img');
img.style.display = 'none';
var player1 = 0;
var player2 = 0;
let leftDot = document.querySelector('.left-dot');
let rightDot = document.querySelector('.right-dot');
var x = 0;
let player1Head = document.querySelector('.player-1-head');
let player2Head = document.querySelector('.player-2-head');
rightDot.style.display = 'none';
let leftDiv = document.querySelector('.left');
let rightDiv = document.querySelector('.right');
let para1 = document.querySelector('.player-1-para');
let para2 = document.querySelector('.player-2-para');
let cPara1 = document.querySelector('.current-para-1');
let cPara2 = document.querySelector('.current-para-2');
rollDice.addEventListener('click', function(){
    let random = Math.ceil(Math.random()*6);
    img.setAttribute('src', 'dice-'+random+'.svg');
    img.style.display = 'block';
    if(rightDot.style.display == 'none'){
        cPara1.innerHTML = x.toString();
        if(random == 1){
            rightDot.style.display = 'inline';
            leftDot.style.display = 'none';
            cPara2.innerHTML = random.toString();
            leftDiv.style.backgroundColor = '#fff';
            rightDiv.style.backgroundColor = '#ebebe0';
        }
        else{
            cPara1.innerHTML = random.toString();
            player1 += random;
            para1.innerHTML = player1.toString();
            if(player1 >= 100){
                player1Head.innerHTML = "WINNER";
            }
        }
    }
    else if(leftDot.style.display == 'none'){
        cPara2.innerHTML = x.toString();
        if(random == 1){
            rightDot.style.display = 'none';
            leftDot.style.display = 'inline';
            cPara1.innerHTML = random.toString();
            leftDiv.style.backgroundColor = '#ebebe0';
            rightDiv.style.backgroundColor = '#fff';
        }
        else{
            cPara2.innerHTML = random.toString();
            player2 += random;
            para2.innerHTML = player2.toString();
            if(player2 >= 100){
                player2Head.innerHTML = "WINNER";
            }
        }
    }
});
// for new game
let newGame = document.querySelector('.newgame');
newGame.addEventListener('click', function(){
    rightDot.style.display = 'none';
    leftDot.style.display = 'inline';
    leftDiv.style.backgroundColor = '#ebebe0';
    rightDiv.style.backgroundColor = '#fff';
    img.style.display = 'none';
    player1 = 0;
    player2 = 0;
    para1.innerHTML = x.toString();
    para2.innerHTML = x.toString();
    cPara1.innerHTML = x.toString();
    cPara2.innerHTML = x.toString();
    player1Head.innerHTML = "PLAYER 1";
    player2Head.innerHTML = "PLAYER 2";
    leftDot.style.display = 'inline-block';
    rightDot.style.display = 'none';
});