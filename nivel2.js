else if (level ==2) {
    //ATACANDO
    //linha 1
    if((game[0][0] == 'O') && (game[0][1] == 'O') && (game[0][2] == '')){
        game[0][2] = 'O';
    } else if ((game[0][0] == 'O') && (game[0][2] == 'O') && (game[0][1] == '')){
        game[0][1] = 'O';
    } else if ((game[0][1] == 'O') && (game[0][2] == 'O') && (game[0][0] == '')){
        game[0][0] = 'O';
    } 
   
    //linha 2
    else if((game[1][0] == 'O') && (game[1][1] == 'O') && (game[1][2] == '')){
        game[1][2] = 'O';
    } else if ((game[1][0] == 'O') && (game[1][2] == 'O') && (game[1][1] == '')){
        game[1][1] = 'O';
    } else if ((game[1][1] == 'O') && (game[1][2] == 'O') && (game[1][0] == '')){
        game[1][0] = 'O';
    } 
   
    //linha 3
    else if((game[2][0] == 'O') && (game[2][1] == 'O') && (game[2][2] == '')){
        game[2][2] = 'O';
    } else if ((game[2][0] == 'O') && (game[2][2] == 'O') && (game[2][1] == '')){
        game[1][1] = 'O';
    } else if ((game[2][1] == 'O') && (game[2][2] == 'O') && (game[2][0] == '')){
        game[2][0] = 'O';
    } 
   
    //coluna 1
    else if((game[0][0] == 'O') && (game[1][0] == 'O') && (game[2][0] == '')){
        game[2][0] = 'O';
    } else if ((game[0][0] == 'O') && (game[2][0] == 'O') && (game[1][0] == '')){
        game[1][0] = 'O';
    } else if ((game[1][0] == 'O') && (game[2][0] == 'O') && (game[0][0] == '')){
        game[0][0] = 'O';
    } 
    
    //coluna 2
    else if((game[0][1] == 'O') && (game[1][1] == 'O') && (game[2][1] == '')){
        game[2][1] = 'O';
    } else if ((game[0][1] == 'O') && (game[2][1] == 'O') && (game[1][1] == '')){
        game[1][1] = 'O';
    } else if ((game[1][1] == 'O') && (game[2][1] == 'O') && (game[0][1] == '')){
        game[0][1] = 'O';
    } 

    //coluna 3
    else if((game[0][2] == 'O') && (game[1][2] == 'O') && (game[2][2] == '')){
        game[2][2] = 'O';
    } else if ((game[0][2] == 'O') && (game[2][2] == 'O') && (game[1][2] == '')){
        game[1][2] = 'O';
    } else if ((game[1][2] == 'O') && (game[2][2] == 'O') && (game[0][2] == '')){
        game[0][2] = 'O';
    }

    //diagonal 1
    else if((game[0][0] == 'O') && (game[1][1] == 'O') && (game[2][2] == '')){
        game[2][2] = 'O';
    } else if ((game[0][0] == 'O') && (game[2][2] == 'O') && (game[1][1] == '')){
        game[1][1] = 'O';
    } else if ((game[1][1] == 'O') && (game[2][2] == 'O') && (game[0][0] == '')){
        game[0][0] = 'O';
    }

    //diagonal 2
    else if((game[0][2] == 'O') && (game[1][1] == 'O') && (game[2][0] == '')){
        game[2][0] = 'O';
    } else if ((game[0][2] == 'O') && (game[2][0] == 'O') && (game[1][1] == '')){
        game[1][1] = 'O';
    } else if ((game[2][0] == 'O') && (game[1][1] == 'O') && (game[0][2] == '')){
        game[0][2] = 'O';
    }

    //DEFENDENDO
    //linha 1
    else if((game[0][0] == 'X') && (game[0][1] == 'X') && (game[0][2] == '')){
        game[0][2] = 'X';
    } else if ((game[0][0] == 'X') && (game[0][2] == 'X') && (game[0][1] == '')){
        game[0][1] = 'X';
    } else if ((game[0][1] == 'X') && (game[0][2] == 'X') && (game[0][0] == '')){
        game[0][0] = 'X';
    } 

    //linha 2
    else if((game[1][0] == 'X') && (game[1][1] == 'X') && (game[1][2] == '')){
        game[1][2] = 'X';
    } else if ((game[1][0] == 'X') && (game[1][2] == 'X') && (game[1][1] == '')){
        game[1][1] = 'X';
    } else if ((game[1][1] == 'X') && (game[1][2] == 'X') && (game[1][0] == '')){
        game[1][0] = 'X';
    } 

    //linha 3
    else if((game[2][0] == 'X') && (game[2][1] == 'X') && (game[2][2] == '')){
        game[2][2] = 'X';
    } else if ((game[2][0] == 'X') && (game[2][2] == 'X') && (game[2][1] == '')){
        game[1][1] = 'X';
    } else if ((game[2][1] == 'X') && (game[2][2] == 'X') && (game[2][0] == '')){
        game[2][0] = 'X';
    }

    //coluna 1
    else if((game[0][0] == 'X') && (game[1][0] == 'X') && (game[2][0] == '')){
        game[2][0] = 'X';
    } else if ((game[0][0] == 'X') && (game[2][0] == 'X') && (game[1][0] == '')){
        game[1][0] = 'X';
    } else if ((game[1][0] == 'X') && (game[2][0] == 'X') && (game[0][0] == '')){
        game[2][0] = 'X';
    }
    
    //coluna 2
    else if((game[0][1] == 'X') && (game[1][1] == 'X') && (game[2][1] == '')){
        game[2][1] = 'X';
    } else if ((game[0][1] == 'X') && (game[2][1] == 'X') && (game[1][1] == '')){
        game[1][1] = 'X';
    } else if ((game[1][1] == 'X') && (game[2][1] == 'X') && (game[0][1] == '')){
        game[2][1] = 'X';
    }

    //coluna 3
    else if((game[0][2] == 'X') && (game[1][2] == 'X') && (game[2][2] == '')){
        game[2][2] = 'X';
    } else if ((game[0][2] == 'X') && (game[2][2] == 'X') && (game[1][2] == '')){
        game[1][2] = 'X';
    } else if ((game[1][2] == 'X') && (game[2][2] == 'X') && (game[0][2] == '')){
        game[0][2] = 'X';
    }

    //diagonal 1
    else if((game[0][0] == 'X') && (game[1][1] == 'X') && (game[2][2] == '')){
        game[2][2] = 'X';
    } else if ((game[0][0] == 'X') && (game[2][2] == 'X') && (game[1][1] == '')){
        game[1][1] = 'X';
    } else if ((game[1][1] == 'X') && (game[2][2] == 'X') && (game[0][0] == '')){
        game[0][0] = 'X';
    } 

    //diagonal 2
    else if((game[0][2] == 'X') && (game[1][1] == 'X') && (game[2][0] == '')){
        game[2][0] = 'X';
    } else if ((game[0][2] == 'X') && (game[2][0] == 'X') && (game[1][1] == '')){
        game[1][1] = 'X';
    } else if ((game[2][0] == 'X') && (game[1][1] == 'X') && (game[0][2] == '')){
        game[0][2] = 'X';
    } else {
        if (jogada < 8) {
            do{ 
                l=Math.round(Math.random()*2);
                c=Math.round(Math.random()*2);
        } while (game[l][c]!="");
        game[l][c]="O";
    } else{
        for(var l=0; l<3; l++){
            for(var c=0; c<3; c++) {
                if(game[l][c] == ''){
                    game[l][c] = 'O';
                }
            }
        }
    }
    }
}



}
