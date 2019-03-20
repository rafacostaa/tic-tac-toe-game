
// mapeia as posicoes, de 0 a 9
// 0 1 2
// 3 4 5
// 6 7 8
var positions = document.querySelectorAll('.item-board');
//recebe o controle, guarda as posições das jogadas
var game=[];
//controla elementos HTML da variavel game
var board=[];
//indica a vez de quem joga
var turnPlayer = 0; //0=jogador; 1=cpu
//verifica se houve vencedor
var checkWin;
//indica se o game é possivel ou se teve vencedor
var noWinner = true;
var level = 1;
//indica de forma aleatória a jogada do cpu
var turnCpu = 1;
var whoStart = 1;

<<<<<<< HEAD

//FUNÇÕES TROCAM NÍVEL DO JOGO
function levelOne() {
    if (level = 2) {
        level = 1;
    }   
}

function levelTwo() {
    if (level = 1) {
        level = 2;
    }
}

// document.getElementById('id-score-player').innerHTML = xxx;
// document.getElementById('id-score-cpu').innerHTML = yyy;


=======
>>>>>>> parent of 90ffecc... button levels done
//FUNÇÃO PARA PUXAR IMAGENS NO CLICK
//const = img1
//const = img2
//document.getElementById("9").addEventListener("click", function(){
//document.getElementById("9").innerHTML = "<img src='../Tic-Tac-Toe-Game/img/logo_darkblue.png' width='130' height='130'>";

//jogadas
function play(p) {
    
    if((noWinner) && (turnPlayer == 0)) {
        switch(p) {
            //matriz: 0,0 | 0,1 | 0,2
            //        1,0 | 1,1 | 1,2
            //        2,0 | 2,1 | 2,2
    
            case 1:
                if(game[0][0] == ''){
                    game[0][0] = 'X';
                    turnPlayer = 1;
                }
            break;
            case 2:
            if(game[0][1] == ''){
                    game[0][1] = 'X';
                    turnPlayer = 1;
                }
            break;
            case 3:
            if(game[0][2] == ''){
                    game[0][2] = 'X';
                    turnPlayer = 1;
                }
            break;
            case 4:
            if(game[1][0] == ''){
                    game[1][0] = 'X';
                    turnPlayer = 1;
                }
            break;
            case 5:
            if(game[1][1] == ''){
                    game[1][1] = 'X';
                    turnPlayer = 1;
                }
            break;
            case 6:
            if(game[1][2] == ''){
                    game[1][2] = "X";
                    turnPlayer = 1;
                }
            break;
            case 7:
            if(game[2][0] == ''){
                    game[2][0] = 'X';
                    turnPlayer = 1;
                }
            break;
            case 8:
            if(game[2][1] == ''){
                    game[2][1] = 'X';
                    turnPlayer = 1;
                }
            break;
            default: //case 9:
            if(game[2][2] == ''){
                    game[2][2] = 'X';
                    turnPlayer = 1;
                }
            break;
        }
        if(turnPlayer == 1) {
            refreshBoard();
            checkWin = checkWinner ();
            if(checkWin != '') {
            modalWindow();
            noWinner = false;
            }
            cpuTurn();
        }
    }

}
//jodada do CPU e niveis
function cpuTurn (){
    if(noWinner) {
        var line,column;

        //NÍVEL 1
        if(level == 1) {
            do {
                line = Math.round(Math.random() * 2);
                column = Math.round(Math.random() * 2);
            } while (game[line][column]!= '');
                game[line][column] = "O";
            

        //NÍVEL 2
        } else if (level == 2) {

        }

        checkWin = checkWinner ();
        if(checkWin != '') {
            modalWindow();
            //alert (checkWin + "venceu");
            noWinner = false;
        }
        refreshBoard();
        turnPlayer = 0;
    }
}
//confere se há vencedores
function checkWinner() {
    //matriz: 0,0 | 0,1 | 0,2
    //        1,0 | 1,1 | 1,2
    //        2,0 | 2,1 | 2,2
    var line,column;

    //linhas
    for( line = 0; line < 3; line++) {
        if((game[line][0] == game[line][1]) && (game[line][1] == game[line][2])) {
            return game [line][0];
        }
    }
//colunas
    for( column = 0; column < 3; column++) {
        if((game[0][column] == game[1][column]) && (game[1][column] == game[2][column])) {
            return game [0][column];
        }
    }
//diagonais
    if((game[0][0] == game[1][1]) && (game[1][1] == game[2][2])) {
            return game [0][0];
    }
    if((game[0][2] == game[1][1]) && (game[1][1] == game[2][0])) {
    return game [0][2];
    }
    return '';
}
//atualiza array board
function refreshBoard () {
    for(var line = 0; line < 3; line++) {
        for(var column = 0; column < 3; column++){
            if(game[line][column] == 'X') {
                board[line][column].className = 'one';
            } else if (game[line][column] == 'O') {
                board[line][column].innerHTML = 'O';

            } else {
                board[line][column].innerHTML = '';
            }
        }
    }
}
//inicia jogo, limpa tabela, muda jogador
function startGame(){
    noWinner = true;
    turnCpu = 1;
    game = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    board = [
        [document.getElementById('id1'),document.getElementById('id2'),document.getElementById('id3')],
        [document.getElementById('id4'),document.getElementById('id5'),document.getElementById('id6')],
        [document.getElementById('id7'),document.getElementById('id8'),document.getElementById('id9')]
    ];
    refreshBoard();

    //muda jogador que inicia
    //JOGADOR COMEÇA
    if(whoStart == 1) {
        whoStart = 0;
        turnPlayer = whoStart;
        //FAZER ALERTA NA TELA

    //CPU COMEÇA
    } else {
        whoStart = 1;
        turnPlayer = whoStart;
        //FAZER ALERTA NA TELA
        cpuTurn();
    }
}

window.addEventListener("load", startGame);


//MODAL

var modal = document.getElementById('modal-container');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


function modalWindow() {
    setTimeout(function(){
        document.getElementById('modal-container').style.display='block'; 
    }, 200);
}


/*
positions.forEach(function(position, positionIndex) {
    position.addEventListener('click', function playEvent(event) {
        console.log(positionIndex);
        var turnPlayerCssClass = '';
        // Se for o jogador / pessoa
        if (turnPlayer == 0) {
            turnPlayerCssClass = 'one';
            turnPlayer = 1; // muda vez para computador
         
        // se for computador
        } else if (turnPlayer == 1){
            turnPlayerCssClass = 'two';
            turnPlayer = 0; // muda vez para pessoa
        }
        event.target.classList.add(turnPlayerCssClass);
    });
});*/



