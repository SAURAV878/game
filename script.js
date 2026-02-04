let player1 = 'X';
let player2 = 'O';

let running = true;
const game = () => {
    if( running === true) {
        console.log('it is ruunig');
    } else {
        console.log('it is over');
    }
}

const board = [
    '', '', '', '', '', '', '', '', ''
]


const winningConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

const cells = document.querySelectorAll('.child-box');

const statusDisplay = document.querySelector('#status');

const cellclicked = (e) => {
    console.log('A box is clicked', e);

}
    
cells.forEach( box => {
    box.addEventListener('click', cellclicked);
});
