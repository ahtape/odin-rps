let player;
let computer;

function getComputerChoice() {
    let computer = ['rock', 'paper', 'scissor'];
    computer = computer [Math.floor(Math.random() * 3)]
    return computer;
}

function playRound(player, computer) {
    let status;
    let play = {
        rock : {scissor : 'win', paper : 'lose'},
        paper : {rock : 'win', scissor : 'lose'},
        scissor : {paper : 'win', rock : 'lose'}
    };

    if (player == computer) {
        status = 'tie';
    } else {
        status = play[player][computer];
    }
    return status;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let status;
    for (let i = 0; i < 5; i++) {
        player = prompt ('Pick rock / paper / scissor');
        player = player.toLowerCase();
        computer = getComputerChoice();

        if (playRound(player, computer) == 'win') {
            alert('win');
            playerScore++;
        } else if (playRound(player, computer) == 'lose') {
            alert('lose');
            computerScore++;
        } else {
            alert('tie');
        }
    };

    if (playerScore > computerScore) {
        status = 'win';
    } else if (playerScore < computerScore) {
        status = 'lose';
    } else {
        status = 'tie';
    };
    return status;
}

alert(game());