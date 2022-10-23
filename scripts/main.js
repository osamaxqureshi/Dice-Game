
function getDice1() {
    dice1 = Math.random();
    dice1 = dice1 * 6;
    dice1 = Math.floor(dice1) + 1;
    if (dice1 === 1) {
        document.querySelector(".img1").src = "images/dice1.png"
    }
    else if (dice1 === 2) {
        document.querySelector(".img1").src = "images/dice2.png"
    }

    else if (dice1 === 3) {
        document.querySelector(".img1").src = "images/dice3.png"
    }

    else if (dice1 === 4) {
        document.querySelector(".img1").src = "images/dice4.png"
    }

    else if (dice1 === 5) {
        document.querySelector(".img1").src = "images/dice5.png"
    }

    else if (dice1 === 6) {
        document.querySelector(".img1").src = "images/dice6.png"
    }
}


function getDice2() {
    dice2 = Math.random();
    dice2 = dice2 * 6;
    dice2 = Math.floor(dice2) + 1;
    if (dice2 === 1) {
        document.querySelector(".img2").src = "images/dice1.png"
    }

    else if (dice2 === 2) {
        document.querySelector(".img2").src = "images/dice2.png"
    }

    else if (dice2 === 3) {
        document.querySelector(".img2").src = "images/dice3.png"
    }

    else if (dice2 === 4) {
        document.querySelector(".img2").src = "images/dice4.png"
    }

    else if (dice2 === 5) {
        document.querySelector(".img2").src = "images/dice5.png"
    }

    else if (dice2 === 6) {
        document.querySelector(".img2").src = "images/dice6.png"
    }
}

function pickWinner() {
    getDice1();
    getDice2();
    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Win";
    } else if (dice2 > dice1) {
        document.querySelector("h1").innerHTML = "Player 2 Win 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}

pickWinner();
