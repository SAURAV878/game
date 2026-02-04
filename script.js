let currentPlayer = 'X';

let running = true;

const board = [
    '', '', '', '', '', '', '', '', ''
];


const winningConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const cells = document.querySelectorAll('.child-box');

const statusDisplay = document.querySelector('#status');

const cellclicked = (e)  => {

    const index = e.target.id.slice(-1) - 1;

    if (running === true && e.target.innerText === '') {
        board[index] = currentPlayer;
        e.target.innerText = currentPlayer;


        checkWinner();

        if (running && board.every(cell => cell !== '')) {
            running = false;
            statusDisplay.innerText = "It's a Draw!";
            return; 
        }

        if ( running ) {

        if (currentPlayer === 'X') {
            currentPlayer ='O'
        } else {
            currentPlayer ='X'
        }

        statusDisplay.innerText = 'Its ' + currentPlayer + ' turn';
    }
    }
}
    
cells.forEach( box => {
    box.addEventListener('click', cellclicked);
});

const checkWinner = () => {
    for (let i = 0; i < winningConditions.length; i ++) {
        let a = board[winningConditions[i][0]]
        let b = board[winningConditions[i][1]]
        let c = board[winningConditions[i][2]]

        if (a === '' ){
            continue;
        } else if (a === b && b === c) {
            
            running = false;

            statusDisplay.innerText = 'Player ' + currentPlayer + ' Wins'

            return;
        }
    }
}

const resetBtn = document.querySelector('#reset-button');
const restartGame = () => {
    board.fill('');

    cells.forEach(cell => cell.innerText = '');

    currentPlayer ='X'

    running = true;

    statusDisplay.innerText = 'Its ' + currentPlayer + ' turn';
}

resetBtn.addEventListener('click', restartGame);


