//2-tem que aparecer logos de forma alternada
//3- depois que aparecer todos, tem que aparecer mensagem: seja de vitoria, perda ou sem vencedor
//4- o botao de start muda ou criar outro para reiniciar o jogo

//BOTÃO START
function start (){
    for(let i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = '';    
    }
}



//OPÇAO 1 ON CLICK

document.getElementById("1").addEventListener("click", function(){
document.getElementById("1").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("2").addEventListener("click", function(){
document.getElementById("2").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("3").addEventListener("click", function(){
document.getElementById("3").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("4").addEventListener("click", function(){
document.getElementById("4").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("5").addEventListener("click", function(){
document.getElementById("5").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("6").addEventListener("click", function(){
document.getElementById("6").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("7").addEventListener("click", function(){
document.getElementById("7").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("8").addEventListener("click", function(){
document.getElementById("8").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});
document.getElementById("9").addEventListener("click", function(){
document.getElementById("9").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";
});


const player1 = ;
const player2 = ;
var playerTurn = player1;