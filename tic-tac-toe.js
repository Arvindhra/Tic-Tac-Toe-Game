/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let playAgain = true; 

while (playAgain){

    const name1 = prompt("What is Player 1's name? ")
    const name2 = prompt("What is Player 2's name? ")
    console.log("Hello " + name1 + " and " + name2 + " .Let's get the game rolling!")


    let board = {
        1: ' ', 2: ' ', 3: ' ',
        4: ' ', 5: ' ', 6: ' ',
        7: ' ', 8: ' ', 9: ' '
    };

    // TODO: update the gameboard with the user input
    function markBoard(position, mark) {
        board[position] = mark; 
    }

    // TODO: print the game board as described at the top of this code skeleton
    function printBoard() {
        console.log('\n' + board[1] + ' | ' + board[2] + ' | ' + board[3] + " \n--------- \n" +
                    board[4] + ' | ' + board[5] + ' | ' + board[6] + " \n--------- \n" + 
                    board[7] + ' | ' + board[8] + ' | ' + board[9] + ' \n'); 
        
    }


    // TODO: check for wrong input, this function should return true or false.
    // true denoting that the user input is correct
    // you will need to check for wrong input (user is entering invalid position) or position is out of bound
    // another case is that the position is already occupied
    function validateMove(position) {
        if (position < 1 || position > 9 ){
            return false;
        } else if (board[position] !== " "){ 
            return false; 
        } else {
            return true; 
        }
    }

    // TODO: list out all the combinations of winning, you will neeed this
    // one of the winning combinations is already done for you
    let winCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    // TODO: implement a logic to check if the previous winner just win
    // This method should return with true or false
    function checkWin(player) {
        for(let win of winCombinations){
            const[line1, line2, line3] = win; 

            if(board[line1] === player && board[line2] === player && board[line3] === player){
                return true; 
            }  
       }
       return false; 
    }

    // TODO: implement a function to check if the game board is already full
    // For tic-tac-toe, tie bascially means the whole board is already occupied
    // This function should return with boolean
    function checkFull() {
        for(let position = 1; position <= 9; position++){
            if(board[position] === " "){
                return false; 
            }
        }
        return true; 
    }
    

    // *****************************************************
    // Copy all your code/fucntions in Part 1 to above lines
    // (Without Test Cases)
    // *****************************************************


    // TODO: the main part of the program
    // This part should handle prompting the users to put in their next step, checking for winning or tie, etc
    function playTurn(player) {
        console.log(`${player === 'X' ? name1 : name2}'s turn`); 
        let position = prompt('Enter input(1-9): ')

        if(!validateMove(position)){
            console.log("It's an invalid move. Try again!"); 
            playTurn(player); 
        } else {
            markBoard(position,player); 
            printBoard(); 
            
            if(checkWin(player)){
                console.log(`${player === 'X' ? name1 : name2} wins. Congratulations!`); 
                winnerIdentified = true; 
            } else if (checkFull()){
                console.log("It's a tie!");
                winnerIdentified = true; 
            } else{
                if(currentTurnPlayer === 'X'){
                    currentTurnPlayer = 'O'; 
                } else {
                    currentTurnPlayer = 'X'; 
                }
            }

            }
        }
    

    // entry point of the whole program
    console.log('Game started: \n\n' +
        ' 1 | 2 | 3 \n' +
        ' --------- \n' +
        ' 4 | 5 | 6 \n' +
        ' --------- \n' +
        ' 7 | 8 | 9 \n');

    let winnerIdentified = false
    let currentTurnPlayer = 'X'

    while (!winnerIdentified){
        playTurn(currentTurnPlayer);
        // feel free to add logic here if needed, e.g. announcing winner or tie
    }
    playAgain = prompt("Ready for another round of tic-tac-toe game? (yes/no): ").toLowerCase() === "yes"; 
}
console.log("Thank you for playing this game. See you next time.")


// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
